import { useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { Alert } from "react-native";

const useCamera = () => {
  const [cameraPermissionStatus, requestCameraPermission] =
    useCameraPermissions();

  const getCameraPermission = async () => {
    if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    } else if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "Please grant access to the device camera to click images."
      );
      cameraPermissionStatus.status = PermissionStatus.UNDETERMINED;
      const res = await getCameraPermission();
      return res;
    }
    return true;
  };

  return getCameraPermission;
};

export default useCamera;
