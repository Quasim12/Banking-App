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
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <BackToHome />
          <View style={styles.col6}>
            <Text style={styles.pageName}>Notification</Text>
          </View>
          <TouchableOpacity
            style={styles.col3}
            onPress={() => console.log("Search")}
          >
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>

        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.linkText}>Notification</Text>
        </View>
     

        <View style={styles.header}>
          <View style={styles.rrow}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
              Inbox Notifications
            </Text>
            <TouchableOpacity
              style={styles.notificationBell}
              onPress={() => console.log("Notification")}
            >
              <FontAwesome name="bell" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnWrapArea}>
          <TouchableOpacity
            style={[styles.btn, styles.btnRed]}
            onPress={() => console.log("Message 12")}
          >
            <Text style={styles.btnText}>Message 12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnPurple]}
            onPress={() => console.log("Notification 34")}
          >
            <Text style={styles.btnText}>Notification 34</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.billPayInner}>{renderNotifications()}</View>
        <CopyRight />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const renderNotifications = () => {
  const notifications = [
    {
      id: 1,
      name: "Received Money By Aron Fince",
      description: "You have received a payment from Aron Fince.",
      amount: "$169",
      icon: "long-arrow-left",
      img: require("../../assets/images/envato.jpg"),
      btnStyle: styles.btnBlue,
    },
    {
      id: 2,
      name: "Apple.com",
      description: "Apple Laptop Monthly Pay System.                     ",
      amount: "$130",
      icon: "long-arrow-right",
      img: require("../../assets/images/apple.jpg"),
      btnStyle: styles.btnGray,
    },
    {
      id: 3,
      name: "Amazon.com",
      description: "Standard Domain Services Subscription.           ",
      amount: "***",
      icon: "",
      img: require("../../assets/images/envelope.jpg"),
      btnStyle: styles.btnRed,
    },
  ];

  return notifications.map((notification) => (
    <View key={notification.id} style={styles.baBillPayInner}>
      <View>
        <View style={styles.baSingleBillPay}>
          <Image source={notification.img} style={styles.thumb} />
          <View style={styles.details}>
            <Text style={styles.notificationName}>{notification.name}</Text>
            <Text style={styles.notificationDescription}>
              {notification.description}
            </Text>
          </View>
        </View>
        <View style={styles.amountInner}>
          <Text style={styles.amount}>
            <FontAwesome name={notification.icon} size={16} color="black" />
            {notification.amount}
          </Text>
          <TouchableOpacity
            style={[styles.btn, notification.btnStyle]}
            onPress={() => console.log("Read")}
          >
            <Text style={styles.btnText}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: "white",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
    paddingRight: 10,
  },
  rrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  pageName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  col3: {
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
  },
  notificationBell: {
    padding: 5,
  },
  btnWrapArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  btnRed: {
    backgroundColor: "red",
  },
  btnPurple: {
    backgroundColor: "purple",
  },
  btnBlue: {
    backgroundColor: "blue",
  },
  btnGray: {
    backgroundColor: "#95A5A6",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  billPayInner: {
    backgroundColor: "white",
    padding: 10,
  },
  baBillPayInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },
  baSingleBillPay: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    justifyContent: "center",
  },
  notificationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationDescription: {
    fontSize: 14,
    color: "gray",
  },
  amountInner: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "blue",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  footerContainer: {
    backgroundColor: "#fff",
    padding: 1,
    height: 70, // adjust the height to fit your footer content
  },
});

export default Notification;
