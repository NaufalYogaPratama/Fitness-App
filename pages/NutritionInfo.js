import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

function NutritionInfo() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female"); // Default gender
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("Active"); // Default activity level
  const [nutritionData, setNutritionData] = useState(null);

  const fetchNutritionInfo = async () => {
    if (!age || !feet || !inches || !weight) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }

    const url = `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=${gender}&age_value=${age}&age_type=yrs&feet=${feet}&inches=${inches}&lbs=${weight}&activity_level=${activityLevel}`;
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
      setNutritionData(result);
    } catch (error) {
      console.error("Error fetching nutrition info:", error);
      Alert.alert("Error", "Failed to fetch nutrition info");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nutrition Info Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Age (years)"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
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
      <TouchableOpacity style={styles.button} onPress={fetchNutritionInfo}>
        <Text style={styles.buttonText}>Get Nutrition Info</Text>
      </TouchableOpacity>

      {nutritionData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>Nutrition Information</Text>
          <Text style={styles.resultText}>
            **BMI:** {nutritionData.BMI_EER.BMI}
          </Text>
          <Text style={styles.resultText}>
            **Estimated Daily Caloric Needs:**{" "}
            {nutritionData.BMI_EER["Estimated Daily Caloric Needs"]}
          </Text>

          <Text style={styles.resultHeader}>Macronutrients:</Text>
          {nutritionData.macronutrients_table["macronutrients-table"].map(
            (row, index) => (
              <Text key={index} style={styles.resultText}>
                {row[0]}: {row[1]}
              </Text>
            )
          )}

          <Text style={styles.resultHeader}>Minerals:</Text>
          {nutritionData.minerals_table["essential-minerals-table"].map(
            (row, index) => (
              <Text key={index} style={styles.resultText}>
                {row[0]}: {row[1]} (Max: {row[2]})
              </Text>
            )
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "#d9f9d6",
  },
  resultHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  resultText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});

export default NutritionInfo;
