import { useState, createContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Overlay } from "@rneui/base";

export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoadingOverlay = () => {
    setLoading(true);
  };

  const hideLoadingOverlay = () => {
    setLoading(false);
  };

  const loadingCtx = {
    loading,
    showLoadingOverlay,
    hideLoadingOverlay,
  };

  return (
    <LoadingContext.Provider value={loadingCtx}>
      <Overlay isVisible={loading} overlayStyle={styles.overlay}>
        <ActivityIndicator color="white" />
      </Overlay>
      {children}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
});
