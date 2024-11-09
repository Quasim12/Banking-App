import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Notification = () => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalDialog}>
        <View style={styles.modalContent}>
          <View style={styles.baBillPayInner}>
            <View style={styles.baSingleBillPay}>
              <View style={styles.thumb}>
                <Image
                  source={require("../../assets/images/envato.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={styles.details}>
                <Text style={styles.title}>Received Money By Aron Fince</Text>
                <Text style={{ color: "grey" }}>
                  You have received a payment from Aron Fince.
                </Text>
              </View>
            </View>
            <View style={styles.amountInner}>
              <Text style={styles.amountContainer}>
                <Icon name="long-arrow-left" size={16} color="blue" style={styles.icon} />
                <Text style={styles.amount}>$169</Text>
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert("Read button pressed")}
              >
                <Text style={styles.buttonText}>Read</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDialog: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  modalContent: {
    padding: 20,
  },
  baBillPayInner: {
    alignItems: "flex-start", // Align items to the start (left)
  },
  baSingleBillPay: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey',
  },
  thumb: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginTop: 5,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  amountInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 10,

  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  icon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft:250,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Notification;
