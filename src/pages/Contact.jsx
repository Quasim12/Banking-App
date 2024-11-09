import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackToHome />
        <View style={styles.col6}>
          <Text style={styles.pageName}>Contact</Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => console.log("Search")}
        >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Page Title */}
      <View style={styles.pageTitle}>
        <Home />
        <Text style={styles.linkText}>Contact</Text>
      </View>
      <ScrollView style={styles.scrollView}>

      {/* Contact Form */}
      <View style={styles.transactionArea}>
        <View style={styles.contactFormWrap}>
          <TextInput style={styles.input} placeholder="Your Name" />
          <TextInput style={styles.input} placeholder="Mail Address" />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <TextInput style={styles.input} placeholder="Type Of Message" />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => console.log("Send Message")}
          >
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CopyRight />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
    paddingRight:10,
  },
  scrollView: {
    marginBottom:0,
  },

  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  col3: {
    justifyContent: "center",
    alignItems: "center",
  },

  pageName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 19,
  },
  floatLeft: {
    fontSize: 16,
  },
  floatRight: {
    fontSize: 16,
  },
  transactionArea: {
    paddingTop: 36,
    paddingHorizontal: 10,
    marginBottom: 80,
  },
  contactFormWrap: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "black",
  },
  sendButton: {
    backgroundColor: "purple",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Contact;
