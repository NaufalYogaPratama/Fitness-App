import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

function Calculator() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = async () => {
    if (!feet || !inches || !weight) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }

    const url = `https://nutrition-calculator.p.rapidapi.com/api/bmi?measurement_units=std&feet=${feet}&inches=${inches}&lbs=${weight}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aba5117919mshfc40317ad46fde2p1d8da9jsn08ec3786e9c2",
        "x-rapidapi-host": "nutrition-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setBmiResult(result);
    } catch (error) {
      console.error("Error fetching BMI:", error);
      Alert.alert("Error", "Failed to calculate BMI");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Feet"
        keyboardType="numeric"
        value={feet}
        onChangeText={setFeet}
      />
      <TextInput
        style={styles.input}
        placeholder="Inches"
        keyboardType="numeric"
        value={inches}
        onChangeText={setInches}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmiResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>BMI: {bmiResult.bmi}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#17161C",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#BE4346",
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#17161C",
    marginBottom: 4,
  },
});

export default Calculator;
