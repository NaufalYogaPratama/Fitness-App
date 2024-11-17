import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import WelcomeScreen from "./pages/WelcomeScreen";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Exercise from "./pages/Exercise";
import Quotes from "./pages/Quotes";
import Calculator from "./pages/Calculator";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Exercise") {
            iconName = "flame";
          } else if (route.name === "Quotes") {
            iconName = "comment-discussion";
          } else if (route.name === "Calculator") {
            iconName = "law";
          }
          return (
            <Octicons
              name={iconName}
              size={24}
              color={focused ? "black" : "lightgray"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Quotes" component={Quotes} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {showWelcome ? <WelcomeScreen /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
}
