import { useState } from "react";
import { Card, Icon, ListItem, Text } from "@rneui/base";
import { StyleSheet } from "react-native";

const StatsCard = () => {
  const [ordersExpanded, setOrdersExpanded] = useState(false);
  const [ridersExpanded, setRidersExpanded] = useState(false);

  const stats = [
    {
      statTitle: "Orders",
      properties: [
        {
          name: "Pending",
          value: 30,
        },
        {
          name: "Completed",
          value: 70,
        },
        {
          name: "Total",
          value: 100,
        },
      ],
      icon: (
        <Icon
          name="shopping-cart"
          type="material"
          size={26}
          containerStyle={styles.iconContainer}
        />
      ),
      expanded: ordersExpanded,
      setExpanded: setOrdersExpanded,
    },
    {
      statTitle: "Riders",
      properties: [
        {
          name: "Active",
          value: 12,
        },
        {
          name: "Total",
          value: 17,
        },
      ],
      icon: (
        <Icon
          name="people"
          type="material"
          size={28}
          containerStyle={styles.iconContainer}
        />
      ),
      expanded: ridersExpanded,
      setExpanded: setRidersExpanded,
    },
  ];

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>Today's Statistics</Card.Title>
      <Card.Divider />
      {stats.map((stat, ind) => (
        <ListItem.Accordion
          key={ind}
          content={
            <>
              {stat.icon}
              <ListItem.Content>
                <ListItem.Title>{stat.statTitle}</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={stat.expanded}
          onPress={() => {
            stat.setExpanded((state) => !state);
          }}
        >
          {stat.properties.map((property, ind) => (
            <ListItem key={ind}>
              <ListItem.Content style={styles.itemContent}>
                <Text>{property.name}</Text>
                <Text>{property.value}</Text>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>
      ))}
    </Card>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 10,
  },
});
