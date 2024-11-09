import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CopyRight = () => {
  return (
    <View style={styles.footerArea}>
      <View style={styles.container}>
        <Text style={styles.footerText}>
          Copyright © Bankapp 2020. All Rights Reserved. Designed By S7template
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerArea: {
    marginTop: 40,
    backgroundColor: "blue",
    paddingVertical: 10,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  footerText: {
    textAlign: "center",
    color: "white",
    paddingVertical: 10,
    width: "100%",
  },
});

export default CopyRight;
