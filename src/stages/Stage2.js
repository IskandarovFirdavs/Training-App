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

const Stage2 = () => {
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
      <Text style={styles.title}>2-Bosqich: “Ertak terapiyasi”</Text>

      <View style={styles.buttonContainer}>
        {renderButton(
          "1. Xunuk O'rdakcha",
          "Stage1",
          `
Maqsad: O'quvchilarga tashqi ko'rinish uchun boshqalarni taqib qilmaslikni o'rgatish.
Ertak: Xunuk O'rdakcha boshqalar tomonidan yomon ko'rilgan va ta'qib qilingan. Lekin u oxir-oqibat go'zal oqqushga aylanadi.
Savollar:
1. Nega o'rdakchani "xunuk" deyishgan?
2. O'rdakchaga nimalar bo'ldi?
3. Qaysi xarakter xususiyatlari sizga yoqdi?
4. O'rdakchadan nimani o'rganish mumkin?`,
          require("../../assets/images/duck.png")
        )}
        {renderButton(
          "2. Qizil Shapkacha",
          "Stage2",
          `
Maqsad: Bolalarni o'z xavfsizligiga e'tibor berishga undash.
Ertak: Qizil Shapkacha onasining topshirig'iga qarshilik qilmay, o'rmonga yo'l oladi. U yo'lda bo'riga duch kelib, xavfdan o'zini saqlaydi.
Savollar:
1. Nega Qizil Shapkacha o'rmonga ketgan?
2. Bo'ri qanday hiyla ishlatdi?
3. Qanday saboqlar bor?`,
          require("../../assets/images/redhat.png")
        )}
        {renderButton(
          "3. Uchta Cho'chqacha",
          "Stage3",
          `
Maqsad: Mehnatsevarlik va sabr-toqatning ahamiyatini tushuntirish.
Ertak: Uch cho'chqacha uy qurishadi, lekin faqat mustahkam uy bo'ri hujumidan omon qoladi.
Savollar:
1. Qaysi cho'chqacha dono bo'ldi va nega?
2. Mustahkam uy qurishning saboqlari qanday?`,
          require("../../assets/images/pigs.png")
        )}
        {renderButton(
          "4. Aladdin va Sehrli Chiroq",
          "Stage4",
          `
Maqsad: Aqlli qarorlar va saxiylikni o'rgatish.
Ertak: Aladdin sehrli chiroq yordamida o'z hayotini o'zgartiradi, lekin har doim halolligini saqlab qoladi.
Savollar:
1. Sehrli chiroq qanday imkoniyatlar berdi?
2. Aladdinning qaysi xarakteri sizga yoqdi?`,
          require("../../assets/images/aladdin.png")
        )}
        {renderButton(
          "5. Pinokkio",
          "Stage5",
          `
Maqsad: Yolg'onning zararini tushuntirish.
Ertak: Pinokkio yolg'on gapirganda burni o'sadi, bu uni o'zini o'zgartirishga undaydi.
Savollar:
1. Nima uchun Pinokkioning burni o'sardi?
2. Yolg'onning oqibatlari qanday bo'ldi?`,
          require("../../assets/images/pinocchio.png")
        )}
        {renderButton(
          "6. Qor Malikasi",
          "Stage6",
          `
Maqsad: Do'stlik va fidoyilikning ahamiyatini tushuntirish.
Ertak: Gerda o'z do'sti Kayni sovuq Qor Malikasi qo'lidan qutqaradi.
Savollar:
1. Gerda qanday fidoyilik qildi?
2. Do'stlikning kuchini qanday his qildingiz?`,
          require("../../assets/images/snow_queen.png")
        )}
        {renderButton(
          "7. Tilla Baliqcha",
          "Stage7",
          `
Maqsad: Haddan tashqari orzu qilishning zararini tushuntirish.
Ertak: Baliqchi tilla baliqni qo'yib yuboradi, lekin uning xotini haddan tashqari orzular qilib, hammasini yo'qotadi.
Savollar:
1. Xotinning haddan oshgan orzulari qanday oqibatlarga olib keldi?
2. Baliqchi to'g'ri qaror qabul qildimi?`,
          require("../../assets/images/golden_fish.png")
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

export default Stage2;
