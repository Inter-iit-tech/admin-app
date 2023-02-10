import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "./../utils/axios/request";
// import axios from "axios";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polyline,
} from "react-native-maps";

export default function OrdersMap() {
  const [riders, setRiders] = useState([]);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "violet",
    "orange",
    "pink",
    "black",
  ];
  const getAdminRiderDetails = () => {
    console.log("CALLED");
    axios
      .get("api/v1/admin/rider-admin")
      .then((response) => {
        console.log({ s: response.data.status, d: response.data.data });
        const d = response.data.data;
        setRiders(d);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAdminRiderDetails();
  }, []);

  const Markers = ({ orders, color }) => {
    return orders.map((order, i) => {
      return (
        <Marker
          key={order.orderId.AWB}
          identifier={String(order.orderId.AWB)}
          coordinate={{
            latitude: order.orderId.location.lat,
            longitude: order.orderId.location.lng,
          }}
          pinColor={color}
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>
                  {i} {order.names}
                </Text>
                <Text>{order.orderId.address}</Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
      );
    });
  };

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        rotateEnabled
        customMapStyle={mapStandardStyle}
        initialRegion={BangaloreCoordinates}
      >
        {riders.length > 0 &&
          riders.map((rider, ind) => {
            return (
              <Markers
                key={ind}
                orders={rider?.tours[0]}
                color={colors[ind + 1]}
              />
            );
          })}
      </MapView>
    </>
  );
}

export const BangaloreCoordinates = {
  latitude: 12.9063958,
  longitude: 77.5886106,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};

const mapStandardStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
];

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    paddingTop: 15,
    backgroundColor: "white",
  },
  footerPadView: {
    height: 90,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    paddingVertical: 10,
  },
  map: {
    height: "80%",
    width: "100%",
    flex: 1,
  },
  // Callout bubble
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
});
