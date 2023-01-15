import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Orders, Riders, Pickups, AddPickup } from "./../screens";
import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";

const TabNavigator = createBottomTabNavigator();

export default function Navigator() {
  const homeBarOptions = {
    tabBarIcon: () => <Icon name="home" />,
  };

  const orderBarOptions = {
    tabBarIcon: () => <Icon name="shopping-cart" type="material" />,
  };

  const riderrBarOptions = {
    tabBarIcon: () => <Icon name="people" type="material" />,
  };

  const pickupBarOptions = {
    tabBarIcon: () => <Icon name="shopping-bag" type="material" />,
    headerShown: false,
  };

  // Stacks

  const pickupStack = createNativeStackNavigator();
  const PickupStackNavigator = () => {
    return (
      <pickupStack.Navigator>
        <pickupStack.Screen
          name="pickups"
          component={Pickups}
          options={{ title: "Pickups" }}
        />
        <pickupStack.Screen
          name="add-pickup"
          component={AddPickup}
          options={{ title: "Add pickup" }}
        />
      </pickupStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={styles}>
        <TabNavigator.Group>
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
        </TabNavigator.Group>
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarActiveTintColor: "green",
  headerStyle: { height: 100 },
});
