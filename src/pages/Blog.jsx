import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../components/Home";
import CopyRight from "../components/CopyRight";
import Footer from "../components/Footer";
import BackToHome from '../components/BackToHome';

const Blog = () => {
  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
            <BackToHome/>
            <View style={styles.col6}>
              <Text style={styles.pageName}>Blog</Text>
            </View>
            <TouchableOpacity
              style={styles.col3}
              onPress={() => console.log("Search")}
            >
              <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* Page Title */}
        <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.floatRight}>Blog</Text>
        </View>

        {/* Blog Area */}
        <View style={styles.blogArea}>
          <View style={styles.sectionTitle}>
            <Text style={styles.title}>Recent Posts</Text>
            <TouchableOpacity onPress={() => Linking.openURL("#")}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {[
            [
              require("../../assets/images/blog1.jpg"),
              require("../../assets/images/blog2.jpg"),
            ],
            [
              require("../../assets/images/blog3.jpg"),
              require("../../assets/images/blog4.jpg"),
            ],
            [
              require("../../assets/images/blog5.jpg"),
              require("../../assets/images/blog6.jpg"),
            ],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((img, index) => (
                <View
                  key={index}
                  style={[
                    styles.col6,
                    index === 0 ? { marginRight: 10 } : { marginLeft: 10 },
                  ]}
                >
                  <View style={styles.singleBlog}>
                    <Image source={img} style={styles.thumb} />
                    <View style={styles.details}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL("single-blog.html")}
                      >
                        <Text style={styles.blogLink}>
                          How to save your money in own business firm.
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Load More Button */}
        <View style={styles.btnWrap}>
          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => console.log("Load More")}
          >
            <Text style={styles.btnText}>Load More</Text>
          </TouchableOpacity>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 30, // To make space for the fixed footer
  },
  header: {
    backgroundColor: "blue",
    padding: 5,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Adjust spacing between columns
    marginBottom: 5, // Add margin between rows
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
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 20,
    
  },
  floatLeft: {
    fontSize: 16,
  },
  floatRight: {
    fontSize: 16,
  },
  blogArea: {
    paddingHorizontal: 10,
    paddingBottom: 20,
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
  viewAll: {
    fontSize: 16,
    color: "blue",
  },
  singleBlog: {
    marginBottom: 20,
    width: "100%", // Make each blog card take up full width of the column
    borderWidth: 1,
    borderBottomWidth:7,
    borderColor: "#ddd",
    borderRadius: 10, // Add rounded corners to the blog cards
    overflow: "hidden",
  },
  thumb: {
    width: "100%",
    height: 150,
  },
  details: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center", // Center the text inside the details
  },
  blogLink: {
    fontSize: 16,
    color: "black",
    textAlign: "center", // Center the blog link text
  },
  btnWrap: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  btnLarge: {
    backgroundColor: "blue",
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
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

export default Blog;
