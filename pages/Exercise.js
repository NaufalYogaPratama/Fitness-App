import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { bodyParts } from "../data/bodyParts";
import { exercises } from "../data/exercises";

function Exercise() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleBodyPartPress = (bodyPart) => {
    const filteredExercises = exercises.filter(
      (exercise) => exercise.bodyPart === bodyPart
    );
    setSelectedExercises(filteredExercises);
    setShowDetailModal(true);
  };

  const renderBodyPartItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bodyPartItem}
      onPress={() => handleBodyPartPress(item.name)}
    >
      <Image source={item.image} style={styles.bodyPartImage} />
      <Text style={styles.bodyPartName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderExerciseDetail = () => (
    <Modal visible={showDetailModal} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowDetailModal(false)}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.detailContainer}
            showsVerticalScrollIndicator={true}
          >
            {selectedExercises.length > 0 ? (
              selectedExercises.map((exercise, index) => (
                <View key={index} style={styles.exerciseCard}>
                  <Image
                    source={{ uri: exercise.gifUrl }}
                    style={styles.exerciseGif}
                  />
                  <Text style={styles.detailTitle}>{exercise.name}</Text>
                  <Text style={styles.detailText}>
                    Target: {exercise.target}
                  </Text>
                  <Text style={styles.detailText}>
                    Equipment: {exercise.equipment}
                  </Text>
                  <Text style={styles.detailText}>
                    Secondary Muscles: {exercise.secondaryMuscles.join(", ")}
                  </Text>
                  <Text style={styles.detailSubTitle}>Instructions:</Text>
                  {exercise.instructions.map((step, stepIndex) => (
                    <Text key={stepIndex} style={styles.detailText}>
                      {stepIndex + 1}. {step}
                    </Text>
                  ))}
                </View>
              ))
            ) : (
              <Text style={styles.noExerciseText}>No exercises available.</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Latihan Berdasarkan Bagian Tubuh</Text>
      <FlatList
        data={bodyParts}
        renderItem={renderBodyPartItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.bodyPartList}
      />
      {renderExerciseDetail()}
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bodyPartList: {
    paddingVertical: 10,
  },
  bodyPartItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  bodyPartImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  bodyPartName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: windowHeight * 0.8,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: "#ff0000",
    fontWeight: "bold",
  },
  detailContainer: {
    padding: 20,
    paddingTop: 50,
  },
  exerciseCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exerciseGif: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
  },
  detailSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  noExerciseText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
});

export default Exercise;
