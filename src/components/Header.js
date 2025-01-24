import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>

      <Text style={styles.linkText}>Psixologik treninglar (bolalar uchun)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4CAF50",
    padding: 15,
    flexDirection: "row", // Linklar va matn yonma-yon joylashadi
    justifyContent: "space-between", // Elementlar orasidagi bo'shliq
    alignItems: "center", // Vertikal markazlash
  },
  headerText: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Montserrat-Bold",
    flex: 1, // Matnni chap tomonga joylashtirish
    textAlign: "left", // Matnni chapga joylashtirish
  },
  link: {
    marginLeft: 20, // Linklar orasidagi masofa
  },
  linkText: {
    fontSize: 16,
    color: "#FFF", // Link matn rangi
    fontFamily: "Montserrat-Regular",
  },
});

export default Header;
