import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import Home from "../components/Home";
import BackToHome from "../components/BackToHome";
const ForgotPassword = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <>
    <View style={styles.row}>
          <BackToHome/>
          <View style={styles.col6}>
            <Text style={styles.pageName}>Forgot Password</Text>
          </View>
          <TouchableOpacity
            style={styles.col3}
            onPress={() => console.log("Search")}
          >
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      {/* Header */}
      

      {/* Page Title */}
      <View style={styles.pageTitle}>
        <Home />
        <Text style={styles.linkText}>Forgot Password</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      {/* Sign-in Area */}
      <View style={styles.signinArea}>
        <View style={styles.formContainer}>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>User name*</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Email Address*</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Password*</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <TouchableOpacity
            style={styles.checkboxWrap}
            onPress={() => setIsAccepted(!isAccepted)}
          >
            <View style={[styles.checkbox, isAccepted && styles.checkboxChecked]}>
              {isAccepted && <FontAwesome name="check" size={14} color="white" />}
            </View>
            <Text style={styles.checkboxText}>Accept terms & condition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.registerButton, !isAccepted && styles.disabledButton]}
            onPress={() => console.log("Register")}
            disabled={!isAccepted}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CopyRight />
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF4081",
    paddingVertical: 20,
    alignItems: "center",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor:'blue',
  },
  pageName:{
fontSize:20,
color:'white',
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  linkText: {
    // color: "#0000EE",
  },
  signinArea: {
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  inputWrap: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    borderRadius: 5,
  },
  checkboxWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
  },
  checkboxWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#6200EE",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#6200EE",
  },
  checkboxText: {
    marginLeft: 10,
  },
  registerButton: {
    backgroundColor: "#6200EE",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#6200EE",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ForgotPassword;
