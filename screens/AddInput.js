import React, { useState } from "react";
import { Button, View } from "react-native";
import axios from "axios";
import * as DocumentPicker from "expo-document-picker";

const DocPicker = () => {
  const [doc, setDoc] = useState();

  const pickDocument = async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });
      if (response.type == "success") {
        const { name, size, uri } = response;
        const nameParts = name.split(".");
        const fileType = nameParts[nameParts.length - 1];
        const fileToUpload = {
          name,
          size,
          uri,
          type: "application/" + fileType,
        };
        console.log(fileToUpload, "...............file");
        setDoc(fileToUpload);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Doc: " + doc.uri);
  };

  const postDocument = () => {
    const formData = new FormData();
    formData.append("rawData", doc);
    const options = {
      url: "http://localhost:3000/api/v1/input/productDetails",
      method: "POST",
      body: formData,
      headers: {
        ...formData.getHeaders(),
      },
      data: formData,
    };

    axios(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button title="Select Document" onPress={pickDocument} />
      <Button title="Upload" onPress={postDocument} />
    </View>
  );
};

export default DocPicker;
