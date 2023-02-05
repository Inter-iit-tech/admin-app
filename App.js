import { LoadingContextProvider } from "./contexts/LoadingContext";
import StackNavigator from "./navigation";

export default function App() {
  return (
    <LoadingContextProvider>
      <StackNavigator />
    </LoadingContextProvider>
  );
}
