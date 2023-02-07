import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import RiderCard from "../components/RiderCard";
import axios from "./../utils/axios/request";
import { SearchBar } from "@rneui/themed";
import useLoadingIndicator from "../hooks/useLoadingIndicator";
import { Button } from "@rneui/base";

export default function Riders() {
  const [riders, setRiders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, showLoading, hideLoading] = useLoadingIndicator();

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };
  const getAdminDetails = () => {
    showLoading();
    axios
      .get("/api/v1/admin/details-db/riders")
      .then((response) => {
        if (response?.data?.data) setRiders(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        hideLoading();
      });
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar
          value={search}
          onChangeText={updateSearch}
          placeholder="Search"
          lightTheme={true}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
        />
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: "white" }}>
        <Button title="Refresh" type="outline" onPress={getAdminDetails} />
      </View>
      <FlatList
        style={styles.list}
        data={riders}
        renderItem={({ index, item }) => {
          return <RiderCard rider={item} key={index} />;
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  searchContainer: {
    width: 350,
    padding: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: "#F1F3F4",
    margin: 0,
    borderWidth: 0,
  },
  list: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  address: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 12,
  },
  type: {
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 7,
  },
});
