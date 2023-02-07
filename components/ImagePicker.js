import { View, StyleSheet, Image, Alert, Text } from "react-native";
import { Button, Icon } from "@rneui/base";
import { launchCameraAsync } from "expo-image-picker";
import useCamera from "../hooks/useCamera";
import useMedia from "../hooks/useMedia";
import COLORS from "../assets/colors/colors";

const ImagePicker = ({
  onImageSelect,
  imageURI,
  fallbackText = "No image selected",
}) => {
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
      aspect: [9, 16],
      base64: true,
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    onImageSelect(result.assets[0]);
  };

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
          <Text style={styles.displayText}>{fallbackText}</Text>
        )}
      </View>
      <Button
        title="Click Image"
        onPress={selectImage}
        icon={
          <Icon
            name="camera-alt"
            type="material"
            color={COLORS.primaryBlue}
            style={{ marginLeft: 5 }}
          />
        }
        iconRight={true}
        type="outline"
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
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  displayText: {
    textAlign: "center",
    color: "white",
    padding: 5,
  },
});
