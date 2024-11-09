import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Make sure you have this dependency
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";

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

const CartArea = () => {
  const carts = [
    {
      backgroundColor: "blue",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
    {
      backgroundColor: "red",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
    {
      backgroundColor: "purple",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
    {
      backgroundColor: "blue",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
    {
      backgroundColor: "green",
      balance: "$56,985.00",
      cardNumber: "0000 0000 0000 0909",
      expiry: "12/10",
      ccv: "513",
      name: "ARON SMITH",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <BackToHome/>
        <View style={styles.col6}>
          <Text style={styles.pageName}>Carts</Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => console.log("Search")}
        >
          <FontAwesome name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.cartArea} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.linkText}>Carts</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>You Have Carts</Text>
            <Text style={styles.countTitle}>5</Text>
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
    backgroundColor: "white",
  },
  cartArea: {
    flex: 1,
    marginBottom:10,
  },
  col3: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pageName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 10,
  },
  linkText: {
    color: "black",
    fontSize: 16,
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
  },
  countTitle: {
    backgroundColor: "green",
    color: "white",
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: "center",
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
  cardNumber: {
    fontSize: 18,
    marginBottom: 5,
  },
  rows: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: 'blue',
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
  detail: {
    fontSize: 16,
  },
  footerContainer: {
    justifyContent: 'flex-end',
  },
  scrollViewContent: {
    flexGrow: 1,
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

export default CartArea;
