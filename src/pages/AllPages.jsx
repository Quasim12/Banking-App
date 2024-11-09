import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";
const AllPages = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = (page) => {
    setSelected(page);
    navigation.navigate(page);
  };

  const renderMenuItem = (name, iconName, page, isDoubleArrow = false) => (
    <TouchableOpacity
      key={name}
      onPress={() => handlePress(page)}
      style={[styles.menuItem, selected === page && styles.selected]}
    >
      <View style={styles.menuIcon}>
        {isDoubleArrow ? (
          <FontAwesome name="angle-double-right" size={24} color="#800080" />
        ) : (
          <Icon name={iconName} size={24} color="#800080" />
        )}
      </View>
      <Text style={styles.menuText}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <BackToHome/>
        <View style={styles.col6}>
          <Text style={styles.pageName}>All Pages</Text>
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
          <Text style={styles.linkText}>All Pages</Text>
        </View>

        <View style={styles.menu}>
          <Text style={styles.menuTitle}>Pages</Text>
          {renderMenuItem("My Card", "remove-outline", "CartArea")}
          {renderMenuItem("Saving", "remove-outline", "Saving")}
          {renderMenuItem("Transaction", "remove-outline", "Transaction")}
          {renderMenuItem("Transaction Details", "remove-outline", "TransactionDetails")}
          {renderMenuItem("Bills Details", "remove-outline", "BillsDetails")}
          {renderMenuItem("Notification", "remove-outline", "Notification")}
          {renderMenuItem("Bill Pay", "remove-outline", "BillPay")}
          {renderMenuItem("Blog", "remove-outline", "Blog")}
          {renderMenuItem("Blog Details", "remove-outline", "BlogDetail")}
          {renderMenuItem("About", "remove-outline", "About")}
          {renderMenuItem("Contact", "remove-outline", "Contact")}
        </View>

        <View style={styles.menu}>
          <Text style={styles.menuTitleRed}>User Authentication</Text>
          {renderMenuItem("Login", "remove-outline", "SignIn", true)}
          {renderMenuItem("Register", "remove-outline", "SignUp", true)}
          {renderMenuItem("User Setting", "remove-outline", "User Setting", true)}
          {renderMenuItem("Sms Verification", "remove-outline", "UserVerification", true)}
          {renderMenuItem("Forgot Password", "remove-outline", "ForgotPassword", true)}
        </View>

        <View style={styles.menu}>
          <Text style={styles.menuTitlePurple}>Menu</Text>
          {renderMenuItem("Login", "remove-outline", "SignIn", true)}
          {renderMenuItem("About", "remove-outline", "About", true)}
          {renderMenuItem("Blog", "remove-outline", "Blog", true)}
          {renderMenuItem("Blog Details", "remove-outline", "BlogDetail", true)}
          {renderMenuItem("404", "remove-outline", "404", true)}
          {renderMenuItem("Faq", "remove-outline", "Faq", true)}
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
    color: 'white',
  },
  col3: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  menu: {
    padding: 20,
    marginBottom: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#800080",
    color: "#fff",
    padding: 10,
  },
  menuTitleRed: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#ff3366",
    color: "#fff",
    padding: 10,
  },
  menuTitlePurple: {
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
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  footerContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
  linkText: {
    fontSize: 16,
  }
});

export default AllPages;
