import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import Home from "../components/Home";
import BackToHome from "../components/BackToHome";
const UserVerification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackToHome />
        <View style={styles.col6}>
          <Text style={styles.pageName}>User Verification</Text>
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
          <Text style={styles.linkText}>User Verification</Text>
        </View>

        <View style={styles.pageNameContainer}>
          <Text style={styles.pageTitleText}>Verification</Text>
        </View>

        <View style={styles.signinArea}>
          <View style={styles.container}>
            <ImageBackground
              // source={require('./assets/img/bg/14.png')}
              style={styles.verificationInner}
            >
              <Text style={styles.verificationText}>
                Enter SMS Verification 4 Digit Code
              </Text>
              <TextInput
                style={styles.verificationInput}
                placeholder="....."
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.verifyBtn}
                onPress={() => console.log("Verify Pressed")}
              >
                <Text style={styles.verifyBtnText}>Verify</Text>
              </TouchableOpacity>
            </ImageBackground>
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
    backgroundColor: "#fff",
  },
  headerArea: {
    width: "100%",
    paddingVertical: 20,
  },

  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
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

  textCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  textRight: {
    alignItems: "flex-end",
  },
  pageName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  floatLeft: {
    color: "#000",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  pageTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  pageNameContainer: {
    backgroundColor: "#FF4081",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  signinArea: {
    marginVertical: 20,
    marginBottom: 10,
  },
  verificationInner: {
    padding: 20,
    alignItems: "center",
  
  },
  verificationText: {
    fontSize: 18,
    marginBottom: 50,
  },
  verificationInput: {
    height: 52,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    fontSize: 70,
    width: 150,
    marginBottom: 180,
    textAlign: "center",
  
  },
  verifyBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
  },
  verifyBtnText: {
    color: "#fff",
    width: 280,
    textAlign: "center",
    fontSize: 22,
  },
});

export default UserVerification;
