import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "@rneui/themed";
import food from "./../assets/images/food.png";
import HorizontalCard from "../components/horizontalCard";

const orders = [
  {
    image: food,
    customer: "David",
    address: "Hyderabad, Telangana",
    date: "18 june, 2023",
    status: "Delivered",
  },
  {
    image: food,
    customer: "Tim",
    address: "Hyderabad, Telangana",
    date: "18 june, 2023",
    status: "Delivered",
  },
  {
    image: food,
    customer: "Johns",
    address: "Hyderabad, Telangana",
    date: "18 june, 2023",
    status: "Delivered",
  },
  {
    image: food,
    customer: "David",
    address: "Hyderabad, Telangana",
    date: "18 june, 2023",
    status: "Delivered",
  },
];
export default function Orders() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };

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
      <ScrollView style={styles.orders}>
        {orders.map((order, index) => (
          <HorizontalCard order={order} key={index} />
        ))}
      </ScrollView>
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
});
