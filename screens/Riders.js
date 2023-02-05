import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import RiderCard from "../components/RiderCard";
import axios from "./../utils/axios/request";
import { SearchBar } from "@rneui/themed";

// const dummyRiders = [
//   {
//     name: "John Smith",
//     id: "1234567890",
//     totalBagVolume: 45.67,
//     currentAvailableBagVolume: 23.56,
//     nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
//     ordersAssignedToday: 20,
//   },
//   {
//     name: "John Doe",
//     id: "123456676s7",
//     totalBagVolume: 45.67,
//     currentAvailableBagVolume: 23.56,
//     nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
//     ordersAssignedToday: 20,
//   },
//   {
//     name: "John Doe",
//     id: "123456798989",
//     totalBagVolume: 45.67,
//     currentAvailableBagVolume: 23.56,
//     nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
//     ordersAssignedToday: 20,
//   },
//   {
//     name: "John Doe",
//     id: "12345679090",
//     totalBagVolume: 45.67,
//     currentAvailableBagVolume: 23.56,
//     nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
//     ordersAssignedToday: 20,
//   },
//   {
//     name: "John Doe",
//     id: "1234567909",
//     totalBagVolume: 45.67,
//     currentAvailableBagVolume: 23.56,
//     nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
//     ordersAssignedToday: 20,
//   },
// ];

export default function Riders() {
  const [riders, setRiders] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    console.log(search);
    setSearch(search);
  };
  const getAdminDetails = () => {
    axios
      .get("/api/v1/admin/details-db/riders")
      .then((response) => {
        if (response?.data?.data) setRiders(response.data.data);
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
      <ScrollView style={styles.orders}>
        {riders.map((rider, index) => (
          <RiderCard rider={rider} key={index} />
        ))}
      </ScrollView>
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
  orders: {
    height: "100%",
    paddingHorizontal: 10,
    marginVertical: 20,
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
