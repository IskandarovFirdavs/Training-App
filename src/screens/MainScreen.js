import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { colors } from "../theme/theme";

const MainScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(1)); // Fade animatsiya
  const [scaleAnim] = useState(new Animated.Value(1)); // Zoom animatsiya
  const [currentSlide, setCurrentSlide] = useState(0); // Hozirgi slayd

  const images = [
    require("../../assets/images/kids1.jpg"),
    require("../../assets/images/kids2.jpg"),
    require("../../assets/images/kids3.jpg"),
    require("../../assets/images/kids4.jpg"),
    require("../../assets/images/kids5.jpg"),
    require("../../assets/images/kids6.jpg"),
    require("../../assets/images/kids7.jpg"),
  ];

  // Har 5 sekundda slaydlarni avtomatik almashtirish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  // Animatsiyalarni qayta ishga tushirish
  useEffect(() => {
    fadeAnim.setValue(0);
    scaleAnim.setValue(1);

    // Fade va Zoom animatsiyalar
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(scaleAnim, {
      toValue: 1.1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentSlide]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Animated.Image
            key={index}
            source={image}
            style={[
              styles.image,
              {
                opacity: currentSlide === index ? fadeAnim : 0,
                transform: [{ scale: currentSlide === index ? scaleAnim : 1 }],
              },
            ]}
          />
        ))}
      </View>

      {/* Dumaloq indikatorlar */}
      <View style={styles.indicators}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlide === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      {/* Matn */}
      <Text style={styles.sectionTitle}>Maqsad:</Text>
      <Text style={styles.text}>
        Boshlang'ich sinf o'quvchilarining moslashuvi va ijtimoiy rivojlanishi
        uchun qulay sharoitlar yaratish, tashqi va ichki omillar ta'sirini
        kamaytirish, ta'lim oluvchilarning tazyiq holatlarini oldini olish va
        kichik yoshdagi o'quvchilarda xulq-atvor buzilishlarining oldini olish.
      </Text>

      <Text style={styles.sectionTitle}>Vazifalar:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>
          • Boshlang'ich sinf o'quvchilariga konstruktiv xatti-harakat
          ko'nikmalarini o'rgatish;
        </Text>
        <Text style={styles.listItem}>
          • O'quvchilarning psixologik madaniyatini oshirish;
        </Text>
        <Text style={styles.listItem}>
          • "Xavf guruhidagi" bolalarni aniqlash va ularning jismoniy va
          psixologik salomatligini himoya qilish bo'yicha psixologik-pedagogik
          yordam ko'rsatish;
        </Text>
        <Text style={styles.listItem}>
          • O'quvchilarga, ularning ota-onalari yoki qonuniy vakillariga
          individual yondashuvni amalga oshirish;
        </Text>
        <Text style={styles.listItem}>
          • Boshlang'ich sinf o'quvchilariga ijtimoiy-pedagogik kuzatuvni yo'lga
          qo'yish.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Kutilayotgan Natijalar:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>
          • Boshlang'ich sinf o'quvchilarining mojarolarni tinch yo'l bilan hal
          qilish ko'nikmalarini egallashlari;
        </Text>
        <Text style={styles.listItem}>
          • O'quvchilarning ta'lim muassasasi sharoitida og'riqsiz moslashuvini
          ta'minlash;
        </Text>
        <Text style={styles.listItem}>
          • O'quvchilarning o'z-o'zini baholash darajasini oshirish;
        </Text>
        <Text style={styles.listItem}>
          • Bolalarning psixologik salomatligi sifatini yaxshilash;
        </Text>
        <Text style={styles.listItem}>
          • O'quvchilarda o'z qadr-qimmati va mas'uliyat hissini shakllantirish;
        </Text>
        <Text style={styles.listItem}>
          • Pedagogik xodimlar va ota-onalarning bolalarga nisbatan tazyiqlarni
          oldini olish bo'yicha bilim darajasini oshirish;
        </Text>
        <Text style={styles.listItem}>
          • Kichik yoshdagi o'quvchilarning o'zaro munosabatlarida tazyiq
          harakatlarining kamayishi.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.inactive,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 10,
    alignSelf: "flex-start",
    fontFamily: "Montserrat-SemiBold",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: "justify",
    marginBottom: 20,
    fontFamily: "Montserrat-Regular",
  },
  list: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
  },
});

export default MainScreen;
