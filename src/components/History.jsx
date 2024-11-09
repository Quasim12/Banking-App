import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const History = () => {
  const [income, setIncome] = useState(58968.0);
  const [expenses, setExpenses] = useState(50968.0);
  const [totalBills, setTotalBills] = useState(50968.0);
  const [savings, setSavings] = useState(58.0);

  return (
    <>
      <View style={styles.titlee}>
        <Text style={styles.title}>History</Text>
        <Text style={{ color: "#007bff", marginTop: 10, fontSize: 16 }}>View All</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Income</Text>
              <Text style={[styles.cardValue, { color: "blue" }]}>
                ${income.toFixed(2)}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Expenses</Text>
              <Text style={[styles.cardValue, { color: "red" }]}>
                ${expenses.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Total Bills</Text>
              <Text style={[styles.cardValue, { color: "purple" }]}>
                ${totalBills.toFixed(2)}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>Savings</Text>
              <Text style={[styles.cardValue, { color: "green" }]}>
                ${savings.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom:20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft:25,
  },
  titlee: {
    marginRight: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    flex: 1,
    maxWidth: "48%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default History;