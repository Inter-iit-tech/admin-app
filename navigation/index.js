import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Orders, Riders } from "./../screens";
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
        </TabNavigator.Group>
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarActiveTintColor: "green",
  headerStyle: { height: 100 },
});
