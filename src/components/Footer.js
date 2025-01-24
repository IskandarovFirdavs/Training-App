import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Material Icons ishlatilmoqda
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      {/* Bosh Sahifa */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Icon name="home" size={24} color="#FFF" />
        <Text style={styles.footerText}>Bosh Sahifa</Text>
      </TouchableOpacity>

      {/* Treninglar */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="menu-book" size={24} color="#FFF" /> {/* Kitob ikonkasi */}
        <Text style={styles.footerText}>Treninglar</Text>
      </TouchableOpacity>

      {/* Mualliflar */}
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("AuthorScreen")}
      >
        <Icon name="person" size={24} color="#FFF" />
        <Text style={styles.footerText}>Mualliflar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: "center", // Ikon va textni markazga joylashtiradi
  },
  footerText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 5, // Text ikonning ostida chiqishi uchun
  },
});

export default Footer;
