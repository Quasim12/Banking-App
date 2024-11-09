import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const PayMonthlyBill = () => {
  return (
    <View style={styles.container}>
      <View style={styles.billPayArea}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Pay Your Monthly Bill</Text>
        </View>
        <ScrollView style={styles.billPayInner}>{renderBills()}</ScrollView>
      </View>
    </View>
  );
};

const renderBills = () => {
  const bills = [
    {
      id: 1,
      name: "Envato.com",
      description: "Standard Elements Services Subscription",
      amount: "$169",
      img: require("../../assets/images/envato.jpg"),
    },
    {
      id: 2,
      name: "Apple.com",
      description: "Apple Laptop Monthly Pay System            ",
      amount: "$130",
      img: require("../../assets/images/apple.jpg"),
    },
    {
      id: 3,
      name: "Amazon.com",
      description: "Standard Domain Services Subscription ",
      amount: "$130",
      img: require("../../assets/images/amazon.jpg"),
    },
  ];

  return (
    <>
      {bills.map((bill) => (
        <View key={bill.id} style={styles.baBillPayInner}>
          <View>
            <View style={styles.baSingleBillPay}>
              <Image source={bill.img} style={styles.thumb} />
              <View style={styles.details}>
                <Text style={styles.billName}>{bill.name}</Text>
                <Text style={styles.billDescription}>{bill.description}</Text>
              </View>
            </View>
            <View style={styles.amountInner}>
              <Text style={styles.amount}>{bill.amount}</Text>
              <TouchableOpacity
                style={styles.btnBlue}
                onPress={() => console.log("Pay Now")}
              >
                <Text style={styles.btnText}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.viewAllBtn} onPress={() => console.log("View All")}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  billPayArea: {
    padding: 20,
  },
  sectionTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  billPayInner: {
    flexDirection: "column",
  },
  baBillPayInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  baSingleBillPay: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1, // This creates the line
    borderBottomColor: "#ddd",
  },
  billName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  billDescription: {
    marginLeft: 10,
    fontSize: 14,
    color: "gray",
  },
  amountInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 15,
  },
  btnBlue: {
    marginRight: -10,
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  viewAllBtn: {
    alignItems: "center",
    marginTop: 20,
  },
  viewAllText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default PayMonthlyBill;
