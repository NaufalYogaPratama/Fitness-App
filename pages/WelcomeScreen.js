import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function WelcomeScreen({ navigation }) {
  if (!navigation) {
    console.warn("Navigation prop is missing in WelcomeScreen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di</Text>
      <Text style={styles.title}>Fitness App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default WelcomeScreen;
