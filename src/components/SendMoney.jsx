import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const users = [
  { id: 1, name: "Alex Smith", image: require("../../assets/images/AlexSmith.jpg") },
  { id: 2, name: "Mariano", image: require("../../assets/images/Mariano.jpg") },
  { id: 3, name: "Karitika", image: require("../../assets/images/Karitika.jpg") },
];

const SendMoney = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Send Money</Text>
        <TouchableOpacity onPress={() => console.log("View All")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {users.map((user) => (
          <View key={user.id} style={styles.userCard}>
            <Image source={user.image} style={styles.userImage} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
   
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
    color: "white",
  },
  viewAll: {
    color: "white",
  },
  userCard: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: 110,
    marginRight: 20,
    
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    color: "#000",
  },
});

export default SendMoney;
