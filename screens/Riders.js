import { StyleSheet, Text, View } from "react-native";

export default function Riders() {
  return (
    <View style={styles.container}>
      <Text>Riders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
