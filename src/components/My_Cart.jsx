import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Make sure you have this dependency
const MyCard = ({
  backgroundColor,
  balance,
  cardNumber,
  expiry,
  ccv,
  name,
}) => (
  <View style={[styles.cardInner, { backgroundColor }]}>
    <View style={styles.cardContent}>
      <View style={styles.texts}>
        <Text style={styles.text}>Balance ...</Text>
        <Text style={styles.text}> ...</Text>
      </View>
      <Text style={[styles.balance, styles.text]}>{balance}</Text>
      <Text style={styles.text}>Card Number</Text>
      <Text style={[styles.cardNumber, styles.text]}>{cardNumber}</Text>
      <View style={styles.row}>
        <View style={styles.col4}>
          <Text style={styles.text}>Expiry</Text>
          <Text style={[styles.detail, styles.text]}>{expiry}</Text>
        </View>
        <View style={styles.col8}>
          <Text style={styles.text}>CCV</Text>
          <Text style={[styles.detail, styles.text]}>{ccv}</Text>
        </View>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  </View>
);

const CartAreaa = () => {
  const carts = [
    {
      backgroundColor: "blue",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={styles.cartArea}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>My Cart</Text>
            <Text style={styles.countTitle}>View All</Text>
          </View>
          {carts.map((cart, index) => (
            <MyCard
              key={index}
              backgroundColor={cart.backgroundColor}
              balance={cart.balance}
              cardNumber={cart.cardNumber}
              expiry={cart.expiry}
              ccv={cart.ccv}
              name={cart.name}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  content: {
    padding: 15,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  countTitle: {
    color: "#007bff",
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
  },
  cardInner: {
    width: "100%",
    height: 230,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  cardContent: {
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  texts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  rows: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "blue",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  col4: {
    flex: 4,
  },
  col8: {
    flex: 8,
  },
  footerContainer: {
    justifyContent: "flex-end",
  },
});

export default CartAreaa;
