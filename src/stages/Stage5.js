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

const Stage5 = () => {
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
      <Text style={styles.title}>5-Bosqich: “Biblioterapiya”</Text>
      <Text style={styles.buttonContainer}>
        Maqsad: Bu asarlar yordamida bolalarda yaxshi xususiyatlar
        kechirimlilik, xushmuomalalik, hamjihatlik ozaro hurmat hamda dostlikni
        shakllantirish.
      </Text>
      <Text style={styles.buttonContainer}>
        Vazifa: Kitob oqish yo audiokitob tinglash va ularni muhokama qilish.
      </Text>
      <Text style={styles.buttonContainer}>Tavsiya etilgan adabiyotlar:</Text>

      <View style={styles.buttonContainer}>
        {renderButton(
          "1. Xudoyberdi Tuxtaboyev “Sariq devni minib”",
          "Stage1",
          ``,
          require("../../assets/images/book1.png")
        )}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(
          "2.Abdulla Qahhor “O'g'ri”",
          "Stage2",
          ``,
          require("../../assets/images/book2.png")
        )}
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(
          "3. Anvar Obidjon “Sehrli qalpoqcha”, “Dostlik sherlari”",
          "Stage4",
          ``,
          require("../../assets/images/book3.png")
        )}
      </View>
      <View style={styles.buttonContainer}>
        {renderButton(
          "Zulfiya “Bolalik”",
          "Stage5",
          ``,
          require("../../assets/images/book4.png")
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

export default Stage5;
