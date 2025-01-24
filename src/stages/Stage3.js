import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { ChevronDown, Star } from "lucide-react-native";
import * as Haptics from "expo-haptics";

const { width } = Dimensions.get("window");

const Stage3 = () => {
  const [expandedButton, setExpandedButton] = useState(null);
  const [animatedHeight] = useState(new Animated.Value(0));
  const [points, setPoints] = useState(0);
  const [completedGames, setCompletedGames] = useState([]);

  const handleButtonPress = (buttonName) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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

    if (!completedGames.includes(buttonName)) {
      setCompletedGames([...completedGames, buttonName]);
      setPoints(points + 10);
    }
  };

  const renderButton = (text, stageName, content) => (
    <Animated.View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[
          styles.button,
          completedGames.includes(stageName) && styles.completedButton,
        ]}
        onPress={() => handleButtonPress(stageName)}
      >
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.iconContainer}>
          {completedGames.includes(stageName) && (
            <Star size={20} color="gold" style={styles.starIcon} />
          )}
          <ChevronDown
            size={24}
            color="white"
            style={{
              transform: [
                { rotate: expandedButton === stageName ? "180deg" : "0deg" },
              ],
            }}
          />
        </View>
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
    </Animated.View>
  );

  const [mascotAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(mascotAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(mascotAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>3-bosqich: "O'yin terapiyasi"</Text>
        <View style={styles.pointsContainer}>
          <Star size={24} color="gold" />
          <Text style={styles.pointsText}>{points}</Text>
        </View>
      </View>

      <Animated.Image
        source={require("../../assets/images/game.png")}
        style={[
          styles.mascot,
          {
            transform: [
              {
                translateY: mascotAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 10],
                }),
              },
            ],
          },
        ]}
      />

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: Animated.multiply(
                  Animated.divide(completedGames.length, 8),
                  width - 32
                ),
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {completedGames.length} / 8 o'yinlar tugallandi
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {renderButton(
          "Maqsad",
          "Stage11",
          `Kichik yoshdagi o'quvchilarning muloqot qilish qobiliyatlarini, ozaro hamkorlikni rivojlantirish, nizoli holatlarni oldini olish va murakkab vaziyatlarni tuzatish uchun o'yinlar. "Do'stlik to'ri" o'yini - sinf rahbari o'rtada turib, qo'lida rang-barang iplarni (to'qish uchun qalin iplar) ushlab turadi. Kichik o'quvchilar ipning uchini olib, ipni qo'yib yubormasdan o'z sheriklarini ipning boshqa uchida topishlari kerak. Ipning uchlarini qo'yib yubormasdan, o'quvchilar umumiy to'rni yechib olishlari kerak.`
        )}
        {renderButton(
          "Do'stlik qo'li",
          "Stage12",
          `Do'stlik qoli" o'yini — oquvchilar oz qollarini chizib, chizilgan rasmini boshqa oquvchiga beradilar, u esa qolda yaxshi tilaklarni yozadi. O'yin, o'quvchi o'zining rasmli varaqasini qaytarib olguncha davom etadi.`
        )}
        {renderButton(
          "Avatar o'yini",
          "Stage13",
          `"Avatar"oyini - bu o'yinda ziddiyatli sinfdoshlar birgalikda ishtirok etsa yaxshi bo'ladi. O'quvchilar bir-biriga qarama-qarshi turishadi. Birinchi o'quvchi biror harakatni (tabassum qilish, ko'z qisish, o'rnidan turish, qo'l ko'tarish, quloqni qashlash va boshqalar) amalga oshiradi, ikkinchi o'quvchi esa 'avator' sifatida aynan shu harakatni takrorlaydi. Keyin rollarni almashtirish mumkin. Murakkablashtirish: 'avator'ning ko'zlarini bog'lab, u o'z sherigi aytgan harakatni bajarishi kerak.`
        )}
        {renderButton(
          "Mening g'azabim",
          "Stage14",
          `"Mening g'azabim" oyini - tasavvur qiling, sizning gazabingiz qanday korinishga ega bolishi mumkin, uni chizing va keyin yoq qiling (masalan, yirtib tashlang, yoping va hokazo).`
        )}
        {renderButton(
          "Yelimlar",
          "Stage15",
          `"Yelimlar" oyini — oqituvchi turli sozlarni aytadi; oquvchilar sinfda erkin harakatlanadilar; oqituvchi "gazab", "jang", "mojarolar", "yigi", "xorlash", "haqorat" kabi sozlarni aytganda oquvchilar xuddi yerga yopishgandek turib qoladilar va harakatlanmaydilar. Mana shunday hayotda «yopishqoq» bolish, mojaroli vaziyatlardan qochish kerak.`
        )}
        {renderButton(
          "Gina",
          "Stage16",
          `"Gina" oyini — yerga 2 litrli suv yoki qum bilan toldirilgan (ogir bolishi uchun) butilkalar qoyiladi, ularga "gazab", "gazablanish", "yomon kayfiyat", "nafrat", "hasad", "jahllanish" kabi sozlar yozilgan. Oquvchilarga bu butilkalarni ryukzak yoki sumkaga ortish taklif etiladi, bu sumkaga "GINA" yozuvi yopishtirilgan. Oquvchilar bu butilkalarni olib yurganida ularning ogirligini his qilishlari kerak, bu esa ruhiy yukni bildiradi.
          Davom: ushbu ryukzakni yechib tashlashni taklif qiling, chunki «gina» va «opkalash» ortiqcha yukdir.`
        )}
        {renderButton(
          "Bolmagan mojarolar",
          "Stage17",
          `"Bolmagan mojarolar" oyini — o'quvchilar juft bo'lib ishlashadi: ularni quyidagi vazifalar bilan konfliktlarni o'ylab topishga taklif qilishadi:
yonmaydigan lampochka va elektrchi;
meva bermayotgan daraxt va bogbon;
teshik kulcha sotayotgan sotuvchi va xaridor;
egri eshak va uni korgazmaga tezda olib borishi kerak bolgan xojayin.
Kichik sinf oquvchilari dialoglarni oylab topadilar va mojarolarni yechish variantlarini muhokama qiladilar.
 Davom: oylab topilgan mojarolar va ularni hal qilish .`
        )}
        {renderButton(
          "Yaxshi sozlar",
          "Stage18",
          `"Yaxshi sozlar" oyini —
Qoidalar: Bolalar bir-birining oldiga o'tiradilar. Ular bir-biriga yaxshi so'z komplimentlar aytishlari kerak. Asosiy shart: takrorlamaslik.
"Yovuz-yaxshi ajdarho" oyini
Asos: "Shaxzoda va Bori"multfilimida Yovuz ajdahoga Shaxzoda "Rahmat" degandan song u yovuzlikni bas qilib yaxshi jdaho bolib qolgandi. 
Topshiriq: Yovuz ajdahoni yaxshiga aylantirgan sozlarni oylab toppish va rolli oyin tarzida namoyish qilish.`
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
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
  completedButton: {
    backgroundColor: "#81c784",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 8,
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
  mascot: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
  progressText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
    color: "#4caf50",
  },
});

export default Stage3;
