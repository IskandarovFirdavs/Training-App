import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { ChevronDown } from "lucide-react-native";

const Stage4 = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setExpandedButton((prev) => (prev === buttonName ? null : buttonName));
  };

  const renderButton = (text, stageName, content, imageSource) => (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(stageName)}
      >
        <Text style={styles.buttonText}>{text}</Text>
        <ChevronDown
          size={24}
          color="white"
          style={{
            transform: [
              { rotate: expandedButton === stageName ? "180deg" : "0deg" },
            ],
          }}
        />
      </TouchableOpacity>

      {expandedButton === stageName && (
        <View style={styles.textContainer}>
          <Image source={imageSource} style={styles.image} />
          <ScrollView style={styles.scrollableArea}>
            <Text style={styles.scrollableText}>{content}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>4-Bosqich: “Art-terapiya”</Text>
      <Text style={styles.buttonContainer}>
        Maqsad: Yosh oquvchilarning xatti-harakatlarini togirlash, hissiy
        holatni muvozanatga keltirish, tashvish va qorquvni kamaytirish, ijodiy
        salohiyatni shakllantirish, oz-ozini anglash qobiliyatlarini
        rivojlantirish.
      </Text>
      <Text style={styles.buttonContainer}>
        Vazifa: Oquvchilar qalam, boyoq, qum, bor, barmoq yoki plastilin
        yordamida rasm chizishadi.
      </Text>
      <Text style={styles.buttonContainer}>Quyidagi mavzularda:</Text>

      <View style={styles.buttonContainer}>
        {renderButton(
          "1. Eng qorqinchli qorquv",
          "Stage1",
          ``,
          require("../../assets/images/fear.png")
        )}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(
          "2. Yaxshi va yomon o'quvchi",
          "Stage2",
          ``,
          require("../../assets/images/reading.png")
        )}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(
          "2. Chiroyli va xunuk",
          "Stage3",
          ``,
          require("../../assets/images/beuty.png")
        )}
      </View>
      <View style={styles.buttonContainer}>
        {renderButton(
          "3. Yoqtirgan isming",
          "Stage4",
          ``,
          require("../../assets/images/name.png")
        )}
      </View>
      <View style={styles.buttonContainer}>
        {renderButton(
          "4. Kayfiyatim",
          "Stage5",
          ``,
          require("../../assets/images/mood.png")
        )}
      </View>
      <View style={styles.buttonContainer}>
        {renderButton(
          "5. Orzuim",
          "Stage6",
          ``,
          require("../../assets/images/dream.png")
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  buttonWrapper: {
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4caf50",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  scrollableArea: {
    maxHeight: 200,
  },
  scrollableText: {
    fontSize: 14,
    color: "#333",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default Stage4;
