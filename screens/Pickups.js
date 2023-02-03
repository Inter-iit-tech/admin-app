import { StyleSheet, Text, View } from "react-native";
import { FAB } from "@rneui/themed";

const Pickups = ({ navigation }) => {
  const openAddPickup = () => {
    navigation.navigate("add-pickup");
  };
  return (
    <View style={styles.container}>
      <View style={styles.pickups}>
        <Text> Pickups</Text>
      </View>
      <View style={styles.floatingButtonContainer}>
        <FAB
          icon={{ name: "add", color: "white" }}
          style={styles.floatingButton}
          color="skyblue"
          onPress={openAddPickup}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  pickups: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  floatingButtonContainer: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  floatingButton: {
    justifyContent: "flex-end",
  },
});

export default Pickups;
