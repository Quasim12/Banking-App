import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SavingGoals = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/img/bg/1.png')} style={styles.headerArea}> */}

      <View style={styles.goalArea}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Saving Goals</Text>
          <TouchableOpacity onPress={() => console.log("Total Pressed")}>
            <Text style={styles.goalTitle}>View All</Text>
          </TouchableOpacity>
        </View>

        {renderGoal("Finance Business", "Business", "  $130", 0.3, "30%")}
        {renderGoal("App Store", "Technology", "$1065", 0.9, "90%")}
        {renderGoal("Gaming Software", "Development", "  $580", 0.6, "60%")}
        {renderGoal("Racing Car", "Playing", "  $980", 0.6, "60%")}
      </View>
    </View>
  );
};

const renderGoal = (title, subtitle, amount, value, percentage) => (
  <View style={styles.singleGoal}>
    <View style={styles.row}>
      <View style={[styles.col7, styles.pr0]}>
        <View style={styles.details}>
          <Text style={styles.goalTitleText}>{title}</Text>
          <Text style={styles.goalSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.col5, styles.pl0]}>
        <View style={styles.circleInner}>
          <Text style={styles.goalAmount}>{amount}</Text>
          <View style={styles.chartCircle}>
            <Text style={styles.chartCircleValue}>{percentage}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  goalArea: {
    paddingVertical: 36,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  goalTitle: {
    fontSize: 16,
    marginRight: 10,
    color: "#007bff",
  },
  singleGoal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 24,
    borderLeftWidth: 2,
    borderColor: "#007bff",
  },
  col7: {
    flex: 11.5,
  },
  col5: {
    borderLeftWidth: 2,
    borderColor: "lightgrey",
    flex: 5,
  },
  pr0: {
    paddingRight: 0,
  },
  pl0: {
    paddingLeft: 0,
  },
  details: {
    paddingHorizontal: 6,
  },
  goalTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  goalSubtitle: {
    color: "#888",
  },
  circleInner: {
    alignItems: "center",
    flexDirection: "row",
  },
  goalAmount: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    fontSize: 18,
  },
  chartCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  chartCircleValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SavingGoals;
