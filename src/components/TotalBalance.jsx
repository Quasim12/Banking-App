import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TotalBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bankapp</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="envelope" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bell" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="user-circle"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.nameText}>Dear Mr Suvro - Bankapp Wallet</Text>
        <View style={styles.totalBalanceContainer}>
          <Icon
            name="university"
            size={48}
            color="#fff"
            style={styles.bankIcon}
          />
          <Text style={styles.balanceText}>Total Balance</Text>
          <Text style={styles.amountText}>$56,985.00</Text>
        </View>
      </View>

      <View style={styles.addBalanceContainer}>
        <Text style={styles.addBalanceText}>Add Balance</Text>
        <TouchableOpacity>
          <Icon name="plus" size={20} color="#5624d0" style={styles.addIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw</Text>
          <Icon
            name="arrow-down"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.sendButton]}>
          <Text style={styles.buttonText}>Send</Text>
          <Icon
            name="arrow-right"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cards</Text>
          <Icon
            name="credit-card"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.exchangeButton]}>
          <Text style={styles.buttonText}>Exchange</Text>
          <Icon
            name="arrow-down"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "blue",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:150,
    
  },
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  balanceContainer: {
    backgroundColor: "#5624d0",
    padding: 30,
    alignItems: "center",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
  },
  nameText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  totalBalanceContainer: {
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4321a8",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  bankIcon: {
    marginVertical: 10,
  },
  balanceText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  amountText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },
  addBalanceContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addBalanceText: {
    color: "#5624d0",
    fontSize: 16,
  },
  addIcon: {
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5624d0",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  sendButton: {
    backgroundColor: "#ff4d4d",
  },
  exchangeButton: {
    backgroundColor: "#4dbd74",
  },
  buttonIcon: {
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TotalBalance;
