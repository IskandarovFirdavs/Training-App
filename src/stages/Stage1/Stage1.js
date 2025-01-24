import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import { ChevronDown } from "lucide-react-native";

const Stage1 = () => {
  const [expandedButton, setExpandedButton] = useState(null);
  const [animatedHeight] = useState(new Animated.Value(0));

  const handleButtonPress = (buttonName) => {
    if (expandedButton === buttonName) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpandedButton(null));
    } else {
      setExpandedButton(buttonName);
      Animated.timing(animatedHeight, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderButton = (text, stageName, content) => (
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
        <Animated.View
          style={[
            styles.textContainer,
            { height: animatedHeight, overflow: "hidden" },
          ]}
        >
          <Text style={styles.scrollableText}>{content}</Text>
        </Animated.View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        1-bosqich: "Savollar va javoblar mamlakati"
      </Text>

      <View style={styles.buttonContainer}>
        {renderButton(
          "Savollar va javoblar mamlakati",
          "Stage11",
          "Endi men sizlardan harakatlar yordamida biror so‘z aytmasdan do‘stingiz bilan salomlashing deyman. Buni qanday qilishimiz mumkin?\nO‘quvchilar: Do‘stimizning qo‘lini siqib, qo‘l ko‘tarib salomlashish mumkin, yana ko‘z qisish yoki yelkalarni bir-biriga ishqalash ham mumkin.\nEksperimentchi pedagog: Barakalla bolajonlar! Unda o‘yinni boshladik!\nO‘yin davomida do‘stingizni iliq qarshi oling, bosh irg‘ab, tabassum qilib salom bering."
        )}
        {renderButton(
          "Dono bobo omborida!",
          "Stage12",
          "Dono bobo: Nihoyat, uzoq kutilgan mehmonlar keldilar! Assalomu alaykum,\nbolajonlar! Yillar davomida ko‘p yashadim, ko‘plab qoidalar va qonunlarni\nbilaman. Axir, har bir narsaning o‘z qonuni bor! Oilada qanday yashash kerak?\nQanday savdo qilish kerak? Qanday qilib mehnatni to‘g‘ri ishlash kerak?\nQanday qilib yaxshi o‘qish kerak? Har bir savolga qonunlar javob beradi.\nO‘quvchilar: Ha, biz bu haqda sinf soatida eshitganmiz."
        )}
        {renderButton(
          "Menga yoqadi...",
          "Stage13",
          "Pedagog-eksperimentator: Endi do‘stingizning orqasiga qog‘oz varaqchalarini\nyopishtiring. Ushbu varaqchalarga markerlar yordamida do‘stingizning\nsizga yoqadigan tomonini yozasiz.\nMashq davomida o‘quvchilar xonada erkin harakatlanadilar. Bu mashq\no‘quvchilar o‘rtasida ishonchli munosabatlarni mustahkamlaydi, har bir\no‘quvchi ijobiy fikrlarini bildira olish imkoniga ega bo‘ladi."
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
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    padding: 12,
  },
  scrollableText: {
    fontSize: 14,
    color: "#2e7d32",
  },
});

export default Stage1;
