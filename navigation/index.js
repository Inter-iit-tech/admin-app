import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Orders,
  Riders,
  Pickups,
  AddPickup,
  AddPackageDetails,
  OrdersMap,
} from "./../screens";
import COLORS from "./../assets/colors/colors";

const TabNavigator = createBottomTabNavigator();

export default function Navigator() {
  const homeBarOptions = {
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
  };

  const orderBarOptions = {
    tabBarIcon: ({ color, size }) => (
      <Icon name="shopping-cart" type="material" color={color} size={size} />
    ),
  };

  const riderrBarOptions = {
    tabBarIcon: ({ color, size }) => (
      <Icon name="people" type="material" color={color} size={size} />
    ),
  };

  const pickupBarOptions = {
    tabBarIcon: ({ color, size }) => (
      <Icon name="shopping-bag" type="material" color={color} size={size} />
    ),
    headerShown: false,
  };

  const itemBarOptions = {
    tabBarIcon: ({ color, size }) => (
      <Icon name="playlist-add" type="material" color={color} size={size} />
    ),
    headerTitle: "Add Item",
  };

  const mapBarOptions = {
    tabBarIcon: () => <Icon name="map" type="material" size={30} />,
    headerTitle: "Map",
  };

  // Stacks

  const PickupStack = createNativeStackNavigator();
  const PickupStackNavigator = () => {
    return (
      <PickupStack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <PickupStack.Screen
          name="pickups"
          component={Pickups}
          options={{ title: "Pickups" }}
        />
        <PickupStack.Screen
          name="add-pickup"
          component={AddPickup}
          options={{ headerTitle: "Add pickup" }}
        />
      </PickupStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        sceneContainerStyle={{ backgroundColor: "white" }}
        screenOptions={styles}
      >
        <TabNavigator.Screen
          name="Home"
          component={Home}
          options={homeBarOptions}
        />
        <TabNavigator.Screen
          name="Orders"
          component={Orders}
          options={orderBarOptions}
        />
        <TabNavigator.Screen
          name="Riders"
          component={Riders}
          options={riderrBarOptions}
        />
        <TabNavigator.Screen
          name="Pickups"
          component={PickupStackNavigator}
          options={pickupBarOptions}
        />
        <TabNavigator.Screen
          name="Items"
          component={AddPackageDetails}
          options={itemBarOptions}
        />
        <TabNavigator.Screen
          name="Maps"
          component={OrdersMap}
          options={mapBarOptions}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarActiveTintColor: "green",
  headerStyle: { height: 100 },
  tabBarActiveTintColor: COLORS.blue,
});
