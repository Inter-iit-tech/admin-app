import { StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.orders}>
        {orders.map((order, index) => (
          <HorizontalCard order={order} key={index} />
        ))}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
