import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/MainScreen";
import AuthorScreen from "../screens/AuthorScreen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AsyncStorage from "@react-native-async-storage/async-storage";
// ! Stages
import Stage1 from "../stages/Stage1/Stage1";
import Stage2 from "../stages/Stage2";
import Stage3 from "../stages/Stage3";
import Stage4 from "../stages/Stage4";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const checkFirstVisit = async () => {
      try {
        const isFirst = await AsyncStorage.getItem("isFirstTime");
        if (isFirst === "false") {
          setIsFirstTime(false);
        } else {
          await AsyncStorage.setItem("isFirstTime", "false");
        }
      } catch (error) {
        console.log("AsyncStorage error: ", error);
      }
    };

    checkFirstVisit();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName={isFirstTime ? "AppIntro" : "MainScreen"}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4CAF50",
            },
            headerTintColor: "#FFF",
          }}
        >
          <Stack.Screen
            name="AppIntro"
            component={AppIntro}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={({ navigation }) => ({
              headerTitle: () => (
                <Header title="Bosh Sahifa" navigation={navigation} />
              ),
            })}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: () => (
                <Header title="Treninglar" navigation={navigation} />
              ),
            })}
          />

          <Stack.Screen
            name="AuthorScreen"
            component={AuthorScreen}
            options={({ navigation }) => ({
              headerTitle: () => (
                <Header title="Mualliflar" navigation={navigation} />
              ),
            })}
          />

          <Stack.Screen
            name="Stage1"
            component={Stage1}
            options={{
              headerTitle: "1-Bosqich",
            }}
          />

          <Stack.Screen
            name="Stage2"
            component={Stage2}
            options={{
              headerTitle: "2-Bosqich",
            }}
          />
          <Stack.Screen
            name="Stage3"
            component={Stage3}
            options={{
              headerTitle: "3-Bosqich",
            }}
          />
          <Stack.Screen
            name="Stage4"
            component={Stage4}
            options={{
              headerTitle: "4-Bosqich",
            }}
          />
        </Stack.Navigator>

        {!isFirstTime && <Footer />}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
