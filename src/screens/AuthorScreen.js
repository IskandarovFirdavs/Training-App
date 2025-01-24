import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";

const { width } = Dimensions.get("window");

const AuthorScreen = () => {
  const author = {
    name: "Berdiyeva Gulmira",
    title: "Psixologiya fanidan professor",
    image: require("../../assets/images/logo.png"), // Make sure to add this image to your assets
    description:
      "Men bu bolalar uchun psixologik treninglarni o'rganib chiqdim va qulaylik uchun o'z ilovamni yaratdim",
  };

  const handleContactPress = async () => {
    const url =
      "https://www.instagram.com/gulmira_5747?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open this URL: " + url);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#2ecc71", "#27ae60"]} style={styles.header}>
        <Text style={styles.headerTitle}>Bizning Mutaxassis</Text>
      </LinearGradient>

      <View style={styles.authorContainer}>
        <Image source={author.image} style={styles.authorImage} />
        <Text style={styles.authorName}>{author.name}</Text>
        <Text style={styles.authorTitle}>{author.title}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{author.description}</Text>
      </View>

      <TouchableOpacity
        style={styles.contactButton}
        onPress={handleContactPress}
      >
        <Text style={styles.contactButtonText}>Bog'lanish</Text>
      </TouchableOpacity>

      <View style={styles.achievementsContainer}>
        <Text style={styles.achievementsTitle}>Yutuqlar</Text>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementNumber}>10+</Text>
          <Text style={styles.achievementText}>Yillik tajriba</Text>
        </View>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementNumber}>1000+</Text>
          <Text style={styles.achievementText}>O'quvchilar</Text>
        </View>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementNumber}>50+</Text>
          <Text style={styles.achievementText}>Treninglar</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0fff0",
  },
  header: {
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  authorContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#2ecc71",
  },
  authorName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  authorTitle: {
    fontSize: 18,
    color: "#27ae60",
    marginBottom: 10,
  },
  descriptionContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#34495e",
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 20,
  },
  contactButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  achievementsContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
    textAlign: "center",
  },
  achievementItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  achievementNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
  },
  achievementText: {
    fontSize: 16,
    color: "#34495e",
  },
});

export default AuthorScreen;
