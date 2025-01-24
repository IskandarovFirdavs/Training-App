import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const AppIntro = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();

  const slides = [
    {
      id: 1,
      image: require("../../assets/images/logo.png"),
      title: "Ilovamizga xush kelibsiz",
      description:
        "Bizning ilovamiz bolalar uchun bilim va ko‘nikmalarni rivojlantirishga qaratilgan!",
    },
    {
      id: 2,
      image: require("../../assets/images/illustration1.png"),
      title: " Bolalar uchun oson va qulay treninglar!",
      description:
        "Qiziqarli mashqlar va o'yinlar bilan farzandingiz vaqtni mazmunli o'tkazadi.",
    },
    {
      id: 3,
      image: require("../../assets/images/illustration2.png"),
      title: "O‘rganish hech qachon bunchalik qiziqarli bo‘lmagan!",
      description:
        "Har bir daraja bolangiz uchun yangi imkoniyatlar eshigini ochadi",
    },
  ];

  const handleNext = useCallback(() => {
    if (currentPage < slides.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.replace("MainScreen");
    }
  }, [currentPage, navigation]);

  const handleSkip = useCallback(() => {
    navigation.replace("MainScreen");
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={slides[currentPage].image} style={styles.image} />
      </View>

      <Text style={styles.title}>{slides[currentPage].title}</Text>
      <Text style={styles.description}>{slides[currentPage].description}</Text>

      <View style={styles.indicators}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentPage === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.next}>
            {currentPage === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "green",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  skip: {
    fontSize: 16,
    color: "#888",
  },
  next: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});

export default AppIntro;
