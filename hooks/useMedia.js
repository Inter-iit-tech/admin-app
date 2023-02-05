import {
  PermissionStatus,
  useMediaLibraryPermissions,
} from "expo-image-picker";

const useMedia = () => {
  const [mediaPermissionStatus, requestMediaPermission] =
    useMediaLibraryPermissions();

  const getMediaPermission = async () => {
    if (mediaPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestMediaPermission();
      return permissionResponse.granted;
    } else if (mediaPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "Please grant access to the device gallery to retrieve images."
      );
      mediaPermissionStatus.status = PermissionStatus.UNDETERMINED;
      const res = await getMediaPermission();
      return res;
    }
    return true;
  };

  return getMediaPermission;
};

export default useMedia;
