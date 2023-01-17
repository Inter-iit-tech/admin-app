import { StyleSheet, View } from "react-native";
import StatsCard from "../components/StatsCard";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatsCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});

export default Home;
