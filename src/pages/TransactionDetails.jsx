import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";
const TransactionDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.row}>
          <BackToHome />
          <View style={styles.col6}>
            <Text style={styles.pageName}>Transactions</Text>
          </View>
          <TouchableOpacity
            style={styles.col3}
            onPress={() => console.log("Search")}
          >
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

      {/* Page Title */}
      <View style={styles.pageTitle}>
        <Text
          style={styles.linkText}
          onPress={() => console.log("Navigate to home")}
        >
          <Home />
        </Text>
        <Text style={styles.linkText}>Transactions</Text>
      </View>
      {/* Balance */}
      <View style={styles.balanceArea}>
        <Text style={styles.sectionTitle}>Recently Transactions</Text>
        <TouchableOpacity
          style={styles.subDelete}
          onPress={() => console.log("Delete")}
        >
          <FontAwesome name="trash" size={24} color="red" />
        </TouchableOpacity>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceTitle}>
            Here is your transactions details history
          </Text>
          <View style={styles.baBalanceInner}>
            <FontAwesome name="arrow-right" size={24} color="white" />
            <Text style={styles.title}>Payment Sent</Text>
            <Text style={styles.amount}>$56.00</Text>
          </View>
        </View>
      </View>

      {/* Transaction Details */}
      <View style={styles.transactionDetails}>
        <View style={styles.transactionDetailsInner}>
          <View style={styles.transactionDetailsTitle}>
            <Text style={styles.floatLeft}>Payment Status</Text>
            <FontAwesome name="check-circle" size={24} color="white" />
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>To</Text>
            <Text style={styles.floatRight}>Rakishony Roy</Text>
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>Bank Name</Text>
            <Text style={styles.floatRight}>Payonner Internatnal</Text>
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>Transaction Category</Text>
            <Text style={styles.floatRight}>Travely</Text>
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>Purchase Receipt</Text>
            <Text style={styles.floatRight}>Yes</Text>
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>Purchase Date</Text>
            <Text style={styles.floatRight}>03/22/2020</Text>
          </View>
          <View style={styles.transactionDetailItem}>
            <Text style={styles.floatLeft}>Total Amounts</Text>
            <Text style={styles.floatRight}>$757.00</Text>
          </View>
        </View>
      </View>

      {/* Contact */}
      <View style={styles.btnWrap}>
        <Text style={styles.btnContentText}>
          If having any transaction issue, Please{" "}
          <Text
            style={styles.contactLink}
            onPress={() => console.log("Contact us")}
          >
            contact us
          </Text>
        </Text>
      </View>
      <CopyRight />
      </ScrollView >

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  // header: {
  //   backgroundColor: "#FFFFFF",
  //   height: 60,
  //   justifyContent: "center",
  // },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
  },
  pageName: {
    fontSize: 18,
    color: "white",
  },
  col3: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  linkText: {
    color: "black",
    fontSize: 16,
  },
  balanceArea: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,

  },
  subDelete: {
    position: "absolute",
    top: 10,
    right: 20,
  },
  balanceCard: {
    marginTop: 20,
    width: "100%",
    height: 130,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#5624d0",
    padding: 30,
    alignItems: "center",
  },
  balanceTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  baBalanceInner: {
    alignItems: "center",
    padding: 6,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  amount: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  transactionDetails: {
    paddingHorizontal: 1,
    marginTop: 60,
  },
  transactionDetailsInner: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 1,
    marginVertical: 5,
  },
  transactionDetailsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#32CD32",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 18,
    marginRight: 18,
  },
  floatLeft: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 18,
    marginRight: 18,
  },
  floatRight: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 18,
    marginRight: 18,
  },
  transactionDetailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  btnWrap: {
    marginTop: 20,
    alignItems: "center",
  },
  btnContentText: {
    fontSize: 16,
    textAlign: "center",
  },
  contactLink: {
    color: "red",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100, 
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
});

export default TransactionDetails;
