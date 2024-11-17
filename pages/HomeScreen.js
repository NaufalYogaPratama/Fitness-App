import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const quickWorkouts = [
  {
    id: "1",
    title: "5 Minute Stretch",
    imageUrl:
      "https://i.pinimg.com/736x/89/b8/c5/89b8c5c620939f214a855674084cd409.jpg",
  },
  {
    id: "2",
    title: "Morning Yoga",
    imageUrl:
      "https://i.pinimg.com/736x/25/de/c7/25dec72595a05c82a340acc51ab4a8c8.jpg",
  },
  {
    id: "3",
    title: "HIIT 10 Minutes",
    imageUrl:
      "https://i.pinimg.com/736x/db/81/6c/db816c5687f558e607be0226dd70e483.jpg",
  },
];

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selamat Datang di Fitness App!</Text>
      <Text style={styles.subheader}>Mulai latihanmu hari ini!</Text>

      {/* Quick Start */}
      <Text style={styles.sectionTitle}>Referensi</Text>
      <FlatList
        data={quickWorkouts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.workoutCard}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.workoutImage}
            />
            <Text style={styles.workoutText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Motivasi Hari Ini */}
      <View style={styles.motivationContainer}>
        <Text style={styles.sectionTitleTips}>Kata-kata Hari Ini</Text>
        <Text style={styles.motivationText}>
          Kesuksesan dimulai dari niat yang kuat dan kerja keras setiap hari.
        </Text>
      </View>

      {/* Tips Harian */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitleTips}>Tips Kesehatan Hari Ini</Text>
        <Text style={styles.tipsText}>
          Jangan lupa minum air secukupnya dan lakukan pemanasan sebelum
          latihan!
        </Text>
      </View>

      {/* Challenge Mingguan */}
      <View style={styles.challengeContainer}>
        <Text style={styles.sectionTitleTips}>Tantangan Mingguan</Text>
        <Text style={styles.challengeText}>
          Coba lakukan 10.000 langkah setiap hari minggu ini!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f3640",
  },
  subheader: {
    fontSize: 16,
    color: "#718093",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17161C",
    marginVertical: 10,
  },
  sectionTitleTips: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17161C",
    marginVertical: 10,
    fontWeight: "bold",
  },
  workoutCard: {
    alignItems: "center",
    marginRight: 16,
  },
  workoutImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  workoutText: {
    marginTop: 8,
    fontSize: 14,
    color: "#17161C",
  },
  tipsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tipsText: {
    fontSize: 14,
    color: "#17161C",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  challengeContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  challengeText: {
    fontSize: 14,
    color: "#17161C",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  motivationContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  motivationText: {
    fontSize: 14,
    color: "#17161C",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default HomeScreen;
