import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.transactionArea}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Transactions</Text>
          <Text style={{ color: "#007bff",paddingRight:10, fontSize: 16, marginRight: 10, }}>View All</Text>
        </View>
        <View style={styles.transactionList}>{renderTransactions()}</View>
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
      img: require("../../assets/images/capital.jpg"),
    },
    {
      id: 2,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$130",
      img: require("../../assets/images/apple.jpg"),
    },
    {
      id: 3,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$130",
      img: require("../../assets/images/amazon.jpg"),
    },
    {
      id: 4,
      name: "Namecheap Inc.",
      description: "Domain Purchase",
      amount: "-$130",
      img: require("../../assets/images/profile.jpg"),
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

  transactionArea: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  transactionList: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: "row",
    marginBottom: 10,
  },

  details: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  transactionName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginTop:10,
  },
  transactionDescription: {
    marginLeft: 10,
    fontSize: 14,
    color: "gray",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginTop: 20,
  },
});

export default Transactions;
