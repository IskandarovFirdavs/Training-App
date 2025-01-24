import React from "react";
import { View, Text } from "react-native";
import Description from "./Description";
import Exercises from "./Exercises";
import Information from "./Information";

const StageIndex = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        1-bosqich: "Savollar va javoblar mamlakati"
      </Text>

      <Description />
      <Exercises />
      <Information />
    </View>
  );
};

export default StageIndex;
