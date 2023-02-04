import { Icon, ListItem } from "@rneui/base";
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import axios from "../utils/axios/request";

const Pickup = ({
  name,
  address,
  awb,
  productID,
  highlighted,
  refetchOrders,
}) => {
  const [expanded, setExpanded] = useState(false);

  const deletePickup = () => {
    console.log("deleting pickup", productID);

    axios
      .post("/api/v1/admin/del-pickup/", { orderId: productID })
      .then((res) => {
        console.log({ res });

        refetchOrders();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={[
        styles.container,
        highlighted && { backgroundColor: "rgb(22, 155, 244)" },
      ]}
    >
      <ListItem.Accordion
        containerStyle={highlighted && { backgroundColor: "rgb(22, 155, 244)" }}
        isExpanded={expanded}
        onPress={() => setExpanded((state) => !state)}
        icon={
          <Icon
            name="chevron-down"
            type="material-community"
            color={highlighted && "white"}
          />
        }
        content={
          <ListItem.Content>
            <ListItem.Title style={highlighted && styles.highlightedText}>
              {name}
            </ListItem.Title>
            <View style={styles.locationContainer}>
              <Icon
                name="location-pin"
                type="entypo"
                color={highlighted && "white"}
              />
              <ListItem.Subtitle
                style={[
                  styles.detailText,
                  highlighted && styles.highlightedText,
                ]}
              >
                {address}
              </ListItem.Subtitle>
            </View>
          </ListItem.Content>
        }
      >
        <View
          style={[
            styles.detail,
            highlighted && { backgroundColor: "rgb(22, 155, 244)" },
          ]}
        >
          <Icon
            name="script-text-outline"
            type="material-community"
            color={highlighted && "white"}
          />
          <ListItem.Subtitle
            style={[styles.detailText, highlighted && styles.highlightedText]}
          >{`AWB: ${awb}`}</ListItem.Subtitle>
        </View>
        <View
          style={[
            styles.detail,
            highlighted && { backgroundColor: "rgb(22, 155, 244)" },
          ]}
        >
          <Icon
            name="information-outline"
            type="material-community"
            color={highlighted && "white"}
          />
          <ListItem.Subtitle
            style={[styles.detailText, highlighted && styles.highlightedText]}
          >{`Product ID: ${productID}`}</ListItem.Subtitle>
        </View>

        <View>
          <Button title="Delete" onPress={deletePickup}></Button>
        </View>
      </ListItem.Accordion>
    </View>
  );
};

export default Pickup;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: "#AFAFAF",
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  locationContainer: {
    paddingTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
    paddingBottom: 14,
    backgroundColor: "white",
  },
  detailText: {
    paddingLeft: 5,
    paddingRight: 10,
  },
  highlightedText: {
    color: "white",
  },
});
