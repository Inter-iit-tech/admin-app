import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import { Icon, Button } from "@rneui/base";
import axios from "axios";
import Input from "../components/Input";
import ImagePicker from "../components/ImagePicker";
import useLoadingIndicator from "../hooks/useLoadingIndicator";
import COLORS from "../assets/colors/colors";
import {
  MAIN_SERVER_URL,
  VOLUME_ESTIMATION_SERVICE_URL,
} from "../utils/constants";

const AddPackageDetails = ({ navigation }) => {
  const [manualInputs, setManualInputs] = useState([
    { label: "Product ID", key: "skuID", value: "", error: "" },
    { label: "Weight", key: "deadWeight", value: "", error: "" },
    { label: "Height", key: "height", value: "", error: "" },
  ]);
  const [autoInputs, setAutoInputs] = useState([
    { label: "Length (cm)", key: "length", value: "" },
    { label: "Breadth (cm)", key: "breadth", value: "" },
    { label: "Area (cm sq.)", key: "area", value: "" },
  ]);
  const [image, setImage] = useState(null);
  const [volumeFetched, setVolumeFetched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, showLoading, hideLoading] = useLoadingIndicator();

  const handleChange = (text, index) => {
    setManualInputs((prevState) => {
      const newState = [...prevState];
      newState[index].value = text;
      return newState;
    });
  };

  const handleError = (error, index) => {
    setManualInputs((prevState) => {
      const newState = [...prevState];
      newState[index].error = error;
      return newState;
    });
  };

  const handleImageSelect = (newImage) => {
    setAutoInputs((prevState) => {
      const newState = [...prevState];
      newState.forEach((input) => {
        input.value = "";
      });
      return newState;
    });
    setImage(newImage);
    uploadImage(newImage);
  };

  const validateManualInputs = () => {
    Keyboard.dismiss();

    let isValid = true;
    manualInputs.forEach((input, index) => {
      if (input.value.length === 0) {
        isValid = false;
        handleError(
          `Please input ${input.label[0].toLowerCase() + input.label.slice(1)}`,
          index
        );
      } else {
        handleError("", index);
      }
    });

    return isValid;
  };

  const resetAllState = () => {
    setManualInputs((prevState) => {
      const newState = [...prevState];
      newState.forEach((input) => {
        input.value = "";
        input.error = "";
      });
      return newState;
    });
    setAutoInputs((prevState) => {
      const newState = [...prevState];
      newState.forEach((input) => {
        input.value = "";
      });
      return newState;
    });
    setImage(null);
    setVolumeFetched(false);
  };

  const uploadImage = async (imageData = image) => {
    showLoading();
    setVolumeFetched(false);

    const fileContents = imageData.base64;
    const body = JSON.stringify({ file: fileContents });
    const headers = { "Content-Type": "application/json" };
    const volumeApiUrl = `${VOLUME_ESTIMATION_SERVICE_URL}/volume/fromBase64`;

    try {
      const { data } = await axios.post(volumeApiUrl, body, {
        headers: headers,
      });
      setAutoInputs((prevState) => {
        const newState = [...prevState];
        newState.forEach((input) => {
          input.value = data[input.key].toString();
        });
        return newState;
      });
      setVolumeFetched(true);
    } catch (error) {
      let displayMessage = "Failed to get volumetric data.";
      if (error.response) {
        displayMessage += ` (${error.response.data.message})`;
      }
      Alert.alert("Error", displayMessage);
    }
    hideLoading();
  };

  const submitDetails = async () => {
    setIsSubmitting(true);

    const isManualInputValid = validateManualInputs();
    if (!isManualInputValid) {
      Alert.alert(
        "Incomplete details",
        "Please ensure that all inputs are filled."
      );
      return;
    }

    if (!volumeFetched) {
      Alert.alert(
        "Incomplete Data",
        "There was a problem with the volumetric data. Please refresh the details and try again."
      );
      return;
    }

    let data = {};
    manualInputs.forEach((input) => {
      data[input.key] = input.value;
    });
    autoInputs.forEach((input) => {
      data[input.key] = input.value;
    });
    data["volume"] = (
      parseFloat(data["area"]) * parseFloat(data["height"])
    ).toString();
    console.log(data);

    const backendURL = `${MAIN_SERVER_URL}/api/v1/input/productDetails`;
    try {
      const res = await axios.post(backendURL, {
        product: {
          ...data,
        },
      });
      console.log(res);
      Alert.alert("Success", "Product Details uploaded successfully");
      resetAllState();
    } catch (err) {
      Alert.alert(
        "Error",
        "There was an error while submitting the product details"
      );
      console.log(err);
    }
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroller}>
        <Text style={styles.subheading}>Enter new item details</Text>
        <View style={styles.content}>
          {manualInputs.map((input, index) => (
            <Input
              placeholder={`Enter the item's ${
                input.label[0].toLowerCase() + input.label.slice(1)
              }`}
              label={input.label}
              value={input.value}
              error={input.error}
              onChangeText={(text) => handleChange(text, index)}
              key={index}
            />
          ))}
        </View>
        {image && (
          <>
            <View style={styles.volumeHeader}>
              <Text style={styles.subheading}>Volumetric details</Text>
              <Button
                onPress={() => uploadImage(image)}
                title="Refresh details"
                titleStyle={{ fontSize: 14, marginLeft: 5 }}
                type="clear"
                size="sm"
                icon={
                  <Icon
                    name="refresh"
                    type="material"
                    color={COLORS.primaryBlue}
                    size={20}
                  />
                }
              />
            </View>
            <View style={styles.content}>
              {autoInputs.map((input, index) => (
                <Input
                  label={input.label}
                  value={input.value}
                  disabled={true}
                  onFocus={() => {
                    Keyboard.dismiss();
                    Alert.alert(
                      "Non-editable data",
                      "This field cannot be manually edited. Please use the 'refresh details' button to update the data."
                    );
                  }}
                  key={index}
                />
              ))}
            </View>
          </>
        )}
        <ImagePicker
          onImageSelect={handleImageSelect}
          imageURI={image?.uri}
          fallbackText={`Choose an image to get the item's volumetric details.`}
        />
        {image && (
          <Button
            disabled={loading || isSubmitting}
            buttonStyle={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "#5D5FEE",
            }}
            // onPress={submitDetails}
          >
            Submit
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPackageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom: 20,
  },
  scroller: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    paddingHorizontal: 10,
  },
  subheading: { color: COLORS.grey, fontSize: 18, marginVertical: 10 },
  content: { marginTop: 10 },
  volumeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
