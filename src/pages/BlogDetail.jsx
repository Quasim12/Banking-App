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

const BlogDetail = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.row}>
        <BackToHome/>
        <View style={styles.col6}>
          <Text style={styles.pageName}>Blog Details</Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => console.log("Search")}
        >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Page Title */}
        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.floatRight}>Blog Details</Text>
        </View>

        {/* Blog Details */}
        <View style={styles.blogDetailsArea}>
          <View style={styles.blogDetailsInner}>
            <View style={styles.sectionTitle}>
              <Text style={styles.title}>Blog Details</Text>
            </View>
            <Image
              source={require("../../assets/images/blogDetail.jpg")}
              style={styles.thumb}
            />
            <View style={styles.details}>
              <Text style={styles.subtitle}>
                How to save your money in own business firm.
              </Text>
              <Text style={styles.paragraph}>
                Folore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
              </Text>
              <Text style={styles.paragraph}>
                Folore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
              </Text>
              <Text style={styles.paragraph}>
                Folore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
              </Text>
            </View>
          </View>
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
    backgroundColor: "#fff",
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
  pageName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30, // Adjust padding to ensure content doesn't overlap with footer
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 25,
  },
  floatLeft: {
    fontSize: 16,
  },
  floatRight: {
    fontSize: 16,
  },
  blogDetailsArea: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  blogDetailsInner: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  thumb: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  details: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
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

export default BlogDetail;
