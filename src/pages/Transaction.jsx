import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";
const Transaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackToHome/>
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

      <ScrollView  style={styles.scrollView}>
        {/* Page Title */}
        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.floatRight}>Transactions</Text>
        </View>

        {/* Transactions */}
        <View style={styles.transactionArea}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>Recently Transactions</Text>
            <TouchableOpacity onPress={() => console.log("Notification")}>
              <FontAwesome name="bell" size={24} color="blue" />
            </TouchableOpacity>
          </View>
          <View style={styles.transactionList}>{renderTransactions()}</View>
        </View>

        <View style={styles.transactionArea}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>Yesterday Transactions</Text>
          </View>
          <View style={styles.transactionList}>{renderTransactions()}</View>
        </View>

        <View style={styles.transactionArea}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>03 Mar 2020</Text>
          </View>
          <View style={styles.transactionList}>{renderTransactions()}</View>
        </View>

        <View style={styles.btnWrap}>
          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => console.log("More Transactions")}
          >
            <Text style={styles.btnText}>More Transactions </Text>
            <FontAwesome name="angle-double-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <CopyRight />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>      
      </View>
  );
};

const renderTransactions = () => {
  const transactions = [
    {
      id: 1,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$130",
        img: require('../../assets/images/capital.jpg')
    },
    {
      id: 2,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$160",
        img: require('../../assets/images/apple.jpg')
    },
    {
      id: 3,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$890",
        img: require('../../assets/images/amazon.jpg')
    },
    {
      id: 4,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$800",
        img: require('../../assets/images/profile.jpg')
    },
  ];

  return transactions.map((transaction) => (
    <View key={transaction.id} style={styles.transactionItem}>
      <Image source={transaction.img} style={styles.thumb} />
      <View style={styles.details}>
        <View>
          <Text style={styles.transactionName}>{transaction.name}</Text>
          <Text style={styles.transactionDescription}>
            {transaction.description}
          </Text>
        </View>
        <Text style={styles.amount}>{transaction.amount}</Text>
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 1,
    backgroundColor: "blue",
  },
  pageName: {
    fontSize: 20,
    color: "white",
  },
  col3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pageName: {
    fontSize: 18,
    fontWeight: "bold",
    color:'white',
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  floatLeft: {
    color: '#000',
    fontSize: 16,
  },
  floatRight: {
    fontSize: 16,
  },
  transactionArea: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionList: {
    backgroundColor: "white",
    padding: 10,
  },
  transactionItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDescription: {
    fontSize: 14,
    color: "gray",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginLeft: 120,
  },
  btnWrap: {
    marginTop: 20,
    alignItems: "center",
  },
  btnLarge: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width:400,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    marginRight: 10,
  },
  scrollView: {
    flex: 1,
    marginBottom:10,
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

export default Transaction;
