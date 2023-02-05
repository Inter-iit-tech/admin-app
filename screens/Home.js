import { StyleSheet, View, Text } from "react-native";
import StatsCard from "../components/StatsCard";
import { FAB } from "@rneui/themed";
import axios from "../utils/axios/request";
import { useState } from "react";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const callStartDayFunction = () => {
    setLoading(true);
    axios
      .get("/api/v1/admin/details")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatsCard />
      {!fetched ? (
        <FAB
          placement="center"
          size="large"
          visible={true}
          color="limegreen"
          title="Start Day"
          icon={{ name: "not-started", type: "material-icons", color: "white" }}
          loading={loading}
          onPress={callStartDayFunction}
        />
      ) : (
        <Text style={styles.text}>Start Day: Results received</Text>
      )}
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

  text: {
    flex: 1,
    alignContent: "center",
    margin: "20%",
    fontWeight: "bold",
  },
});

export default Home;
