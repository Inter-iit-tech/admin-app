import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { FlatList } from "react-native";
import Order from "../components/Order";
import axios from "./../utils/axios/request";
import useLoadingIndicator from "../hooks/useLoadingIndicator";
import { Button } from "@rneui/base";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [loading, showLoading, hideLoading] = useLoadingIndicator();

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };
  const [orders, setOrders] = useState([]);

  const getAdminDetails = () => {
    showLoading();
    axios
      .get("/api/v1/admin/details-db/orders")
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
            <Order
              name={item.names}
              address={item.address}
              awb={item.AWB}
              productID={item.product}
            />
          );
        }}
        keyExtractor={(order) => order.AWB}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
  orders: {
    height: "100%",
    padding: 20,
    marginBottom: 10,
  },
  list: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
