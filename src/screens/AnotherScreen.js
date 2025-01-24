import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../theme/theme"; // Dizaynni chaqirish

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Another Screen</Text>
    </View>
  );
};

export default AnotherScreen;
