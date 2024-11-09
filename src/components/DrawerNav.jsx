import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DrawerNav = (props) => {
  const [selected, setSelected] = useState("Bankapp Display");
  const navigation = props.navigation || useNavigation();

  const handlePress = (item) => {
    setSelected(item);
    if (item === "Bankapp Display") {
      navigation.navigate("Homee"); // Navigate to the Homee screen
    } else if (item === "Pages") {
      navigation.navigate("AllPages"); // Navigate to the AllPages screen
    } else if (item === "Components") {
      navigation.navigate("AllComponents"); // Navigate to the AllComponents screen
    } else if (item === "My Cart") {
      navigation.navigate("CartArea"); // Navigate to the CartArea screen
    } else if (item === "Notification") {
      navigation.navigate("Notification"); // Navigate to the Notification screen
    } else if (item === "Logout") {
      navigation.navigate("SignUp"); // Navigate to the Sign Up screen
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="person-circle-outline" size={24} color="#800080" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Raduronto Kelax</Text>
          <Text style={styles.headerId}>ID: 99883323</Text>
        </View>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => navigation.closeDrawer()}
        >
          <Icon name="close-outline" size={24} color="#800080" />
        </TouchableOpacity>
      </View>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Add Balance</Text>
        <Text style={styles.balanceAmount}>$458786.00</Text>
      </View>
      <TouchableOpacity style={styles.deposit}>
        <Text style={styles.depositText}>Deposit</Text>
        <Icon name="add-outline" size={24} color="blue" />
      </TouchableOpacity>
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Menu</Text>
        <TouchableOpacity
          onPress={() => handlePress("Bankapp Display")}
          style={[
            styles.menuItem,
            selected === "Bankapp Display" && styles.selected,
          ]}
        >
          <View style={styles.menuIcon}>
            <Icon name="document-text-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>Bankapp Display</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Pages")}
          style={[styles.menuItem, selected === "Pages" && styles.selected]}
        >
          <View style={styles.menuIcon}>
            <Icon name="document-text-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>Pages</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Components")}
          style={[
            styles.menuItem,
            selected === "Components" && styles.selected,
          ]}
        >
          <View style={styles.menuIcon}>
            <Icon name="document-text-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>Components</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("My Cart")}
          style={[styles.menuItem, selected === "My Cart" && styles.selected]}
        >
          <View style={styles.menuIcon}>
            <Icon name="cart-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>My Cart</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Setting")}
          style={[styles.menuItem, selected === "Setting" && styles.selected]}
        >
          <View style={styles.menuIcon}>
            <Icon name="settings-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>Setting</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Logout")}
          style={[styles.menuItem, selected === "Logout" && styles.selected]}
        >
          <View style={styles.menuIcon}>
            <Icon name="log-out-outline" size={24} color="#800080" />
          </View>
          <Text style={styles.menuText}>Logout</Text>
          <Icon
            name="chevron-forward-outline"
            size={24}
            color="#800080"
            style={styles.menuArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ViewButton}
          onPress={() => console.log("View Profile")}
        >
          <Text style={styles.ViewButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileIcon: {
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerId: {
    fontSize: 12,
    color: "#666",
  },
  closeIcon: {
    padding: 5,
  },
  balance: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeftWidth:3,
    borderLeftColor:'blue',
    borderRightWidth:3,
    borderRightColor:'blue',
    marginBottom:10,
    margin:10,
  },
  balanceText: {
    fontSize: 18,
    color: "#666",
    marginTop: 3,
    color: "black",
    fontWeight: "bold",
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
    color: "blue",
  },
  deposit: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeftWidth:3,
    borderLeftColor:'blue',
    borderRightWidth:3,
    borderRightColor:'blue',
    margin:10,
  },
  depositText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  menu: {
    flex: 1,
    paddingTop: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    marginLeft: 10,
  },
  selected: {
    backgroundColor: "#f0f0f0",
  },
  ViewButton: {
    backgroundColor: "#6200EE",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 7,
    marginTop: 50,
    margin: 15,
  },
  ViewButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DrawerNav;
