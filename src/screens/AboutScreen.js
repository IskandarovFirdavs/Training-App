import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bu Ilova Haqida</Text>
      <Button title="Orqaga Qaytish" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default AboutScreen;
