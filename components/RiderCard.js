import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { ListItem, Avatar } from "@rneui/themed";

const RiderCard = ({ rider }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.container]}>
      <ListItem.Accordion
        bottomDivider
        topDivider
        content={
          <>
            <Avatar
              rounded
              title={rider?.name?.[0] || "R"}
              titleStyle={{ color: "white", fontWeight: "600" }}
              containerStyle={{ backgroundColor: "#FF7F50" }}
            />

            <ListItem.Content style={styles.title}>
              <Text style={{ fontWeight: "bold" }}>
                {rider.name || "Rider"}
              </Text>
              <Text>{rider.phoneNumber}</Text>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {
          <ListItem topDivider bottomDivider style={styles.content}>
            <ListItem.Content>
              <View style={styles.address}>
                <Text style={styles.type}>Total Bag Volume:</Text>
                <Text style={styles.text}>
                  {rider.totalBagVolume / 1000} Litres
                </Text>
              </View>

              <View style={styles.address}>
                <Text style={styles.type}>Rider ID:</Text>
                <Text style={styles.text}>
                  {String(rider._id)?.slice(-6).toUpperCase()}
                </Text>
              </View>
            </ListItem.Content>
          </ListItem>
        }
      </ListItem.Accordion>
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
  container: {
    borderWidth: 2,
    borderColor: "#AFAFAF",
    borderRadius: 15,
    marginBottom: 5,
    overflow: "hidden",
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
  title: {
    marginLeft: "5%",
  },
  content: {
    marginBottom: "5%",
  },
});
export default RiderCard;
