import React, { useEffect, useState } from "react";
import { Button } from "@rneui/themed";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Platform,
} from "react-native";
import Input from "../components/Input";
import COLORS from "../assets/colors/colors";
import axios from "./../utils/axios/request";
import ImagePicker from "../components/ImagePicker";
import * as FileSystem from "expo-file-system";

const AddPackageDetails = ({ navigation }) => {
  const [manualInputs, setManualInputs] = useState([
    { label: "Product ID", value: "", error: "" },
    { label: "Weight", value: "", error: "" },
    { label: "Height", value: "", error: "" },
  ]);
  const [autoInputs, setAutoInputs] = useState([
    { label: "Length", value: "" },
    { label: "Breadth", value: "" },
    { label: "Area", value: "" },
  ]);
  const [image, setImage] = useState(null);

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

  const validate = () => {
    Keyboard.dismiss();

    let isValid = true;
    manualInputs.forEach((input, index) => {
      if (input.value.length === 0) {
        handleError(
          `Please input ${input.label[0].toLowerCase() + input.label.slice(1)}`,
          index
        );
      } else {
        handleError("", index);
      }
    });

    if (isValid) {
      submitDetails();
    }
  };

  const submitDetails = async () => {
    // let data = {};
    // manualInputs.forEach((input) => {
    //   const camelCaseLabel =
    //     input.label[0].toLowerCase() + input.label.slice(1).split(" ").join("");
    //   data[camelCaseLabel] = input.value;
    // });
    // autoInputs.forEach((input) => {
    //   const camelCaseLabel =
    //     input.label[0].toLowerCase() + input.label.slice(1).split(" ").join("");
    //   data[camelCaseLabel] = input.value;
    // });
    // console.log(data);
    const formData = new FormData();
    const fileContents = await FileSystem.readAsStringAsync(image.uri);
    console.log(fileContents);
    formData.append("file", fileContents);

    // TODO: POST request
    try {
      console.log("sending request");
      const res = await axios({
        method: "post",
        url: "http://192.168.207.145:5000/volume",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.message);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    console.log("[Item Screen]: ", image);
  }, [image]);

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
        <ImagePicker onImageSelect={setImage} imageURI={image?.uri} />
        <Button
          buttonStyle={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#5D5FEE",
          }}
          onPress={validate}
        >
          Submit
        </Button>
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
  },
  scroller: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  heading: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: "bold",
  },
  subheading: { color: COLORS.grey, fontSize: 18, marginVertical: 10 },
  content: { marginTop: 20 },
});
