import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ChevronDown } from "lucide-react-native";

const State7 = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionToggle = (sectionName) => {
    setExpandedSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const renderSection = (title, content, sectionName) => (
    <View style={styles.sectionWrapper}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => handleSectionToggle(sectionName)}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <ChevronDown
          size={24}
          color="white"
          style={{
            transform: [
              { rotate: expandedSection === sectionName ? "180deg" : "0deg" },
            ],
          }}
        />
      </TouchableOpacity>

      {expandedSection === sectionName && (
        <View style={styles.sectionContentWrapper}>
          <ScrollView style={styles.sectionContent}>
            <Text style={styles.sectionText}>{content}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Sinf Soati: «Har qanday zo‘ravonlikka “Yo‘q!” de!»
      </Text>
      <Text style={styles.subtitle}>Maqsad:</Text>
      <Text style={styles.text}>
        Kichik maktab yoshidagi o‘quvchilar orasida zo‘ravonlikning oldini
        olish.
      </Text>

      {renderSection(
        "Zo‘ravonlik turlari",
        `Jismoniy: tan jarohati yetkazish, kaltaklash, urish.
Og‘zaki: haqoratlash, masxara qilish.
Psixologik: kamsitish, qo‘rqitish.
Maydoniy: shaxsiy chegaralarga bostirib kirish (masalan, majburan qayergadir qamab qo‘yish).`,
        "typesOfViolence"
      )}

      {renderSection(
        "Muhokama uchun savollar",
        `1. Obidchi qanday his-tuyg‘ularni boshdan kechiradi? (ustunlik, g‘azab, g‘urur, jazolanmaslik hissi va boshqalar).
2. Zo‘ravonlikka uchragan inson qanday his qiladi? (qo‘rquv, o‘ziga ishonchsizlik, alam, tushunmovchilik va boshqalar).
3. Senga nisbatan zo‘ravonlik qilinsa, jim turish kerakmi? (Yo‘q, hech qachon).
4. Qiyin vaziyatda kimga murojaat qilish kerak? (ota-ona, o‘qituvchi, do‘stlar, militsiya).
5. Zo‘ravonlikni ko‘rsang, nima qilasan? (e‘tiborsiz o‘tib ketmaslik, yordam bera oladiganlarga murojaat qilish).
6. Kimdir zaif bolaga zo‘ravonlik qilishni taklif qilsa, nima qilasan? (o‘zingni uning o‘rniga qo‘y, uning og‘riq va alamini his qil va “Yo‘q” de).
7. Zo‘ravonlik uchun javobgarlik mavjudmi? (Ha, ma’muriy va jinoiy javobgarlik).`,
        "discussionQuestions"
      )}

      {renderSection(
        "Muhokama davomida",
        `O‘quvchilar hayotdan misollar keltirishadi, masalan:
- Zo‘ravonlikka uchragan, uni amalga oshirgan yoki guvohi bo‘lgan holatlar.
- Kiberzo‘ravonlikka duch kelgan bolalar, masalan, telefon orqali tahdidli xabarlar olish.

O‘qituvchi o‘quvchilarni faol muhokama qilishga rag‘batlantiradi, ularning ochiqligi uchun rag‘batlantiruvchi fikrlar bildiradi.`,
        "discussionInClass"
      )}

      {renderSection(
        "Yakun",
        `O‘quvchilar xulosalari:
1. Zo‘ravonlik qurboni bo‘lmaslik uchun sport bilan shug‘ullanish kerak.
2. Boshqalarga hurmat bilan munosabatda bo‘lish, tajovuz yoki mag‘rurlik bilan muloqot qilmaslik lozim.
3. Zaiflarni himoya qilish va hech kimni kamsitmaslik kerak.
4. Zo‘ravonlikning barcha turlari haqida ota-ona yoki katta yoshdagilarga darhol xabar berish kerak.

Asosiy qoida: “Har qanday zo‘ravonlikka “Yo‘q!” de!”`,
        "conclusion"
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  sectionWrapper: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionContentWrapper: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginTop: 4,
  },
  sectionContent: {
    maxHeight: 200,
  },
  sectionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});

export default State7;
