import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const useLoadingIndicator = () => {
  const { loading, showLoadingOverlay, hideLoadingOverlay } =
    useContext(LoadingContext);

  return [loading, showLoadingOverlay, hideLoadingOverlay];
};

export default useLoadingIndicator;
