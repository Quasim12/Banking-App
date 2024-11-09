import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";
const AllComponents = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (page) => {
    setSelected(page);
  };

  const renderMenuItem = (name, iconName, page) => (
    <TouchableOpacity
      key={name}
      onPress={() => handlePress(page)}
      style={[styles.menuItem, selected === page && styles.selected]}
    >
      <View style={styles.menuIcon}>
        <Icon name={iconName} size={24} color="#800080" />
      </View>
      <Text style={styles.menuText}>{name}</Text>
      <Icon
        name="chevron-forward-outline"
        size={24}
        color="#800080"
        style={styles.menuArrow}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <BackToHome/>
        <View style={styles.col6}>
          <Text style={styles.pageName}>All Components</Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => console.log("Search")}
        >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.linkText}>All Components</Text>
        </View>

        <View style={styles.menu}>
          <Text style={styles.menuTitle}>All Components</Text>
          {renderMenuItem("Accordion", "remove-outline", "Accordion")}
          {renderMenuItem("Action", "remove-outline", "Action")}
          {renderMenuItem("Add Home", "remove-outline", "Add Home")}
          {renderMenuItem("Alerts", "remove-outline", "Alerts")}
          {renderMenuItem("Badge", "remove-outline", "Badge")}
          {renderMenuItem("Button", "remove-outline", "Button")}
          {renderMenuItem("Carousel", "remove-outline", "Carousel")}
          {renderMenuItem("Checkbox", "remove-outline", "Checkbox")}
          {renderMenuItem("Content", "remove-outline", "Content")}
          {renderMenuItem("Deposit", "remove-outline", "Deposit")}
          {renderMenuItem("Dialog", "remove-outline", "Dialog")}
          {renderMenuItem("Dropdown", "remove-outline", "Dropdown")}
          {renderMenuItem("Error", "remove-outline", "Error")}
          {renderMenuItem("Home", "remove-outline", "Home")}
          {renderMenuItem("Header", "remove-outline", "Header")}
          {renderMenuItem("Icond", "remove-outline", "Icond")}
          {renderMenuItem("Image", "remove-outline", "Image")}
          {renderMenuItem("Inset", "remove-outline", "Inset")}
          {renderMenuItem("Listview", "remove-outline", "Listview")}
          {renderMenuItem("Modal", "remove-outline", "Modal")}
          {renderMenuItem("Notifications", "remove-outline", "Notifications")}
          {renderMenuItem("Progress", "remove-outline", "Progress")}
          {renderMenuItem("Radio", "remove-outline", "Radio")}
          {renderMenuItem("Search", "remove-outline", "Search")}
          {renderMenuItem("Success", "remove-outline", "Success")}
          {renderMenuItem("Tabs", "remove-outline", "Tabs")}
          {renderMenuItem("Table", "remove-outline", "Table")}
          {renderMenuItem("Title", "remove-outline", "Toast")}
          {renderMenuItem("Toast", "remove-outline", "Toast")}
          {renderMenuItem("Toggle", "remove-outline", "Toggle")}
          {renderMenuItem("Tooltip", "remove-outline", "Tooltip")}
          {renderMenuItem("Typhography", "remove-outline", "Typhography")}
        </View>
        <CopyRight />
      </ScrollView>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    marginBottom:10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
  },
  pageName: {
    fontSize: 20,
    color: "white",
  },
  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  menu: {
    padding: 20,
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#800080",
    color: "#fff",
    padding: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  selected: {
    backgroundColor: "#f0f0f0",
  },
  menuIcon: {
    marginRight: 10,
  },
  dashIcon: {
    marginRight: 10,
  },
  doubleArrowIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  menuArrow: {
    marginLeft: "auto",
  },
  footerContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
});

export default AllComponents;
