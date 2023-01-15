import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import food from "./../assets/images/food.png";
import { Icon } from "@rneui/themed";

const HorizontalCard = ({ order }) => {
  return (
    <View style={styles.orderCard}>
      <Image source={food} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{order.customer}</Text>
        <View style={styles.subContent}>
          <View style={styles.address}>
            <Icon
              name="location-outline"
              type="ionicon"
              containerStyle={styles.icon}
              size={18}
            />
            <Text style={styles.text}>{order.address}</Text>
          </View>
          <View style={styles.address}>
            <Icon name="date-range" containerStyle={styles.icon} size={18} />
            <Text style={styles.text}>{order.date}</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{order.status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderCard: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    minHeight: 130,
  },
  image: {
    height: "100%",
    width: "30%",
    borderRadius: 20,
  },
  content: {
    flexGrow: 1,
    height: "100%",
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#077a87",
  },
  status: {
    marginTop: "auto",
    width: "auto",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#87CEEB",
    borderRadius: 20,
    textAlign: "center",
    color: "white",
  },
  address: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subContent: {
    marginVertical: 5,
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-evenly",
  },
  icon: {
    marginRight: 5,
  },
  statusContainer: { alignItems: "flex-end" },
  text: {
    fontSize: 10,
  },
});
export default HorizontalCard;
