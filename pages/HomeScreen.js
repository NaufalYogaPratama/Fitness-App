import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { bodyParts } from '../constants/bodyParts'; // Pastikan path ke file `bodyParts` sudah benar

function HomeScreen() {
  const renderBodyPartItem = ({ item }) => (
    <TouchableOpacity style={styles.bodyPartItem}>
      <Image source={item.image} style={styles.bodyPartImage} />
      <Text style={styles.bodyPartName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Selamat Datang di Aplikasi Fitness!</Text>

      {/* Daftar Bagian Tubuh */}
      <Text style={styles.sectionTitle}>Latihan Berdasarkan Bagian Tubuh</Text>
      <FlatList
        data={bodyParts}
        renderItem={renderBodyPartItem}
        keyExtractor={(item) => item.name}
        numColumns={2} // Menampilkan dalam dua kolom
        contentContainerStyle={styles.bodyPartList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyPartList: {
    paddingVertical: 10,
  },
  bodyPartItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  bodyPartImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  bodyPartName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default HomeScreen;
