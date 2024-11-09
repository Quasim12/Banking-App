import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RecentPosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Posts</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.postsContainer}>
        <View style={styles.post}>
          <Image
            source={require("../../assets/images/recent1.jpg")} // Replace with your image
            style={styles.postImage}
          />
          <Text style={styles.postTitle}>
            How to save your money in own business firm.
          </Text>
        </View>
        <View style={styles.post}>
          <Image
            source={require("../../assets/images/recent2.jpg")} // Replace with your image
            style={styles.postImage}
          />
          <Text style={styles.postTitle}>
            How to save your money in own business firm.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
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
  viewAll: {
    marginRight: 10,
    fontSize: 16,
    color: "#007bff", // Your desired color
  },
  postsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  post: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomWidth: 5,
    borderBottomColor: "blue",
  },
  postImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default RecentPosts;
