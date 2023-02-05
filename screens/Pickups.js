import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { Button, FAB } from "@rneui/base";
import { FlatList } from "react-native";
import Pickup from "../components/Pickup";
import axios from "./../utils/axios/request";
import useLoadingIndicator from "../hooks/useLoadingIndicator";

const Pickups = ({ navigation }) => {
  const openAddPickup = () => {
    navigation.navigate("add-pickup");
  };

  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, showLoading, hideLoading] = useLoadingIndicator();

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };

  const getAdminDetails = () => {
    showLoading();
    axios
      .get("/api/v1/admin/details-db/pickups")
      .then((response) => {
        if (response?.data?.data) setOrders(response.data.data);
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  searchBar: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: "white",
    paddingVertical: 20,
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
  footerPadView: {
    height: 80,
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
