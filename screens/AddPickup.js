import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import Input from "../components/Input";
import COLORS from "../assets/colors/colors";
import { Button } from "@rneui/themed";

export default function AddPickup({ navigation }) {
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    productId: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const validate = () => {
    Keyboard.dismiss();
    setErrors({});

    let isValid = true;

    if (!inputs.name) {
      handleError("Please input name", "name");
      isValid = false;
    }

    if (!inputs.address) {
      handleError("Please input address", "address");
      isValid = false;
    }

    if (!inputs.productId) {
      handleError("Please input product id", "productId");
      isValid = false;
    }

    if (isValid) {
      submitDetails();
    }
  };

  const submitDetails = () => {
    // POST request
    console.log(inputs);

    // Go back to screen
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroller}>
        <Text style={styles.heading}>Pickup</Text>
        <Text style={styles.subheading}>Enter new pickup details</Text>
        <View style={styles.content}>
          <Input
            placeholder="Enter customer's name"
            label="Customer name"
            onChangeText={(text) => handleOnchange(text, "name")}
            error={errors.name}
          />
          <Input
            placeholder="Enter customer's address"
            label="Customer address"
            multiline={true}
            numberOfLines={3}
            onChangeText={(text) => handleOnchange(text, "address")}
            error={errors.address}
          />
          <Input
            placeholder="Enter product id"
            label="Product id"
            onChangeText={(text) => handleOnchange(text, "productId")}
            error={errors.productId}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            buttonStyle={{ padding: 10, backgroundColor: "#5D5FEE" }}
            onPress={validate}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  scroller: {
    paddingTop: 30,
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
