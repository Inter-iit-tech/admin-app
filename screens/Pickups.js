import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "@rneui/themed";
import { FAB } from "@rneui/base";
import { FlatList } from "react-native";
import Pickup from "../components/Pickup";
import axios from "./../utils/axios/request";

const Pickups = ({ navigation }) => {
  const openAddPickup = () => {
    navigation.navigate("add-pickup");
  };

  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };

  const getAdminDetails = () => {
    axios
      .get("/api/v1/admin/details-db/pickups")
      .then((response) => {
        if (response?.data?.data) setOrders(response.data.data);
      })
      .catch((err) => {
        console.log(err);
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
      <FlatList
        style={styles.list}
        data={orders}
        renderItem={({ index, item }) => {
          return (
            <Pickup
              name={item.names}
              address={item.address}
              awb={item.AWB}
              productID={item._id}
              refetchOrders={getAdminDetails}
            />
          );
        }}
        keyExtractor={(order) => order.AWB}
        ListFooterComponent={View}
        ListFooterComponentStyle={styles.footerPadView}
      />

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
  orders: {
    height: "100%",
    padding: 20,
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
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
