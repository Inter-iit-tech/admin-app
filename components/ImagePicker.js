import { View, StyleSheet, Image, Alert, Text } from "react-native";
import { Button, Icon } from "@rneui/base";
import { launchCameraAsync } from "expo-image-picker";
import useCamera from "../hooks/useCamera";
import useMedia from "../hooks/useMedia";

const ImagePicker = ({ onImageSelect, imageURI }) => {
  const getCameraPermission = useCamera();
  const getMediaPermission = useMedia();

  const selectImage = async () => {
    const cameraPermission = await getCameraPermission();
    const mediaPermission = await getMediaPermission();

    if (!cameraPermission || !mediaPermission) {
      return;
    }

    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (result.canceled) {
      return;
    }

    console.log(result.assets);
    onImageSelect(result.assets?.[0]);
  };

  console.log("[ImagePicker] uri: " + imageURI);
  return (
    <View style={styles.rootContainer}>
      <View
        style={[
          styles.imageContainer,
          !imageURI && { backgroundColor: "#9a9a9a" },
          imageURI && styles.image,
        ]}
      >
        {imageURI ? (
          <Image style={styles.image} source={{ uri: imageURI }} />
        ) : (
          <Text style={styles.displayText}>No Image Selected</Text>
        )}
      </View>
      <Button
        title="Click Image"
        onPress={selectImage}
        icon={
          <Icon
            name="camera-alt"
            type="material"
            color="white"
            style={{ marginLeft: 5 }}
          />
        }
        iconRight={true}
      />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  rootContainer: {
    marginVertical: 16,
  },
  imageContainer: {
    width: "100%",
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 6,
    // overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    borderColor: "red",
    borderWidth: 1,
  },
  displayText: {
    color: "white",
  },
});
