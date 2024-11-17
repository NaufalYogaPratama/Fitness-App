import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import SocialMediaLinks from "../components/SocialMediaLinks";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header headerText={""} flexPosition={"center"} />
      <Header headerText={""} flexPosition={"center"} />

      {/* Section Foto Profil dan Informasi */}
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/images/foto.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Naufal Yoga Pratama</Text>
        <Text style={styles.profileBio}>21120122130059 | Kelompok 04</Text>
      </View>

      {/* Section Social Media */}
      <SocialMediaLinks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 16,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2f3640",
  },
  profileBio: {
    fontSize: 16,
    fontWeight: "400",
    color: "#718093",
    textAlign: "center",
    marginHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default ProfileScreen;
