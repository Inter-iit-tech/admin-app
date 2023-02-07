import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "./../utils/axios/request";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polyline,
} from "react-native-maps";

export default function OrdersMap() {
  const [orders, setOrders] = useState([]);

  const getAdminDetails = () => {
    axios
      .get("/api/v1/admin/details-db/orders")
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
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        rotateEnabled
        customMapStyle={mapStandardStyle}
        initialRegion={BangaloreCoordinates}
      >
        {orders.map((order, i) => {
          return (
            <Marker
              key={order.AWB}
              identifier={String(order.AWB)}
              coordinate={{
                latitude: order.location.lat,
                longitude: order.location.lng,
              }}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      {i} {order.names}
                    </Text>
                    <Text>{order.address}</Text>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </>
  );
}

const BangaloreCoordinates = {
  latitude: 20.14843197337348,
  longitude: 85.67124271883452,
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
