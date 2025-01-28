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

const Stage6 = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setExpandedButton((prev) => (prev === buttonName ? null : buttonName));
  };

  const renderButton = (title, stageName, content, imageSource) => (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(stageName)}
      >
        <Text style={styles.buttonText}>{title}</Text>
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
      <Text style={styles.title}>6-Bosqich: Dramterapiya</Text>

      <Text style={styles.description}>
        Maqsad: O‘quvchilarda quyidagi ertaklar yordamida ijobiy munosabatlarni
        shakllantirish, stressni yengib o‘tish va ijodkorlikni rivojlantirish.
      </Text>

      <Text style={styles.description}>
        Vazifa: Mashhur ertaklar asosida sahnalashtirish.
      </Text>

      <Text style={styles.subtitle}>Tavsiya etilgan ertaklar:</Text>

      {renderButton(
        "1. Zumrad va Qimmat",
        "ZumradVaQimmat",
        "Bu ertak ikki opa-singilning o‘zaro munosabatlari va xulq-atvoriga oid qimmatli darslarni o‘z ichiga oladi. Sahnalashtirish orqali o‘quvchilar do‘stlik, adolat va mehribonlikni tushunib yetadilar.",
        require("../../assets/images/zumrad.png")
      )}

      {renderButton(
        "2. Egri voy va To‘g‘ri voy",
        "EgriVoyVaTogriVoy",
        "Bu ertak yaxshi va yomon xatti-harakatlarning oqibatlarini yorqin ko‘rsatib beradi. Sahnalashtirish orqali bolalar adolat va rostgo‘ylikning muhimligini o‘rganadilar.",
        require("../../assets/images/egri.png")
      )}

      {renderButton(
        "3. Ur To‘qmoq",
        "UrToqmoq",
        "Bu ertak bolalarda muammolarni hal qilishda zukkolik va jasoratni rivojlantirishga yordam beradi. Sahna ko‘rinishlarida ijodkorlik va jamoaviy ishlash ko‘nikmalari shakllanadi.",
        require("../../assets/images/toqmoq.png")
      )}

      {renderButton(
        "4. Oltin Tarvuz",
        "OltinTarvuz",
        "Bu ertak saxovat va mehnatsevarlikning qanday qilib hayotda muvaffaqiyat keltirishini ko‘rsatadi. Sahnalashtirish orqali bolalar o‘z mehnatining natijasini qadrlashni o‘rganadilar.",
        require("../../assets/images/tarvuz.png")
      )}
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonWrapper: {
    marginBottom: 15,
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

export default Stage6;
