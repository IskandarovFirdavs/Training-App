import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { styles } from "../theme/theme"; // Mavzu faylini import qilish

const HomeScreen = ({ navigation }) => {
  const fadeIn = new Animated.Value(0); // Dastlabki qiymat 0

  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1, // oxirgi qiymat 1
      duration: 1500, // 1.5 soniyada animatsiya
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeIn }]}>
        Psixologik Treningga xush kelibsiz!
      </Animated.Text>
      <Animated.Text style={[styles.text, { opacity: fadeIn }]}>
        Trening mashgulotlar 7 bosqichdan iborat bolib, har birining davomiyligi
        40 daqiqadan 60 daqiqagacha davom etadi:{" "}
      </Animated.Text>

      {/* Bosqichlar tugmalari */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage1")} // To'g'ri navigatsiya
      >
        <Text style={styles.buttonText}>1-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage2")}
      >
        <Text style={styles.buttonText}>2-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage3")}
      >
        <Text style={styles.buttonText}>3-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage4")}
      >
        <Text style={styles.buttonText}>4-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage5")}
      >
        <Text style={styles.buttonText}>5-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage6")}
      >
        <Text style={styles.buttonText}>6-bosqich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stage7")}
      >
        <Text style={styles.buttonText}>7-bosqich</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
