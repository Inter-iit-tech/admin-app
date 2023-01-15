import { StyleSheet, Text, View, ScrollView } from "react-native";
import RiderCard from "../components/RiderCard";

const dummyRiders = [
  {
    name: "John Smith",
    id: "1234567890",
    totalBagVolume: 45.67,
    currentAvailableBagVolume: 23.56,
    nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    ordersAssignedToday: 20,
  },
  {
    name: "John Doe",
    id: "123456676s7",
    totalBagVolume: 45.67,
    currentAvailableBagVolume: 23.56,
    nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    ordersAssignedToday: 20,
  },
  {
    name: "John Doe",
    id: "123456798989",
    totalBagVolume: 45.67,
    currentAvailableBagVolume: 23.56,
    nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    ordersAssignedToday: 20,
  },
  {
    name: "John Doe",
    id: "12345679090",
    totalBagVolume: 45.67,
    currentAvailableBagVolume: 23.56,
    nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    ordersAssignedToday: 20,
  },
  {
    name: "John Doe",
    id: "1234567909",
    totalBagVolume: 45.67,
    currentAvailableBagVolume: 23.56,
    nextDeliveryLocation: "6, Shakambari Nagar, 1st stage, JP Nagar, Bangalore",
    ordersAssignedToday: 20,
  },
];

export default function Riders() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.orders}>
        {dummyRiders.map((rider, index) => (
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
  orders: {
    height: "100%",
    padding: 20,
    marginBottom: 10,
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
