import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
} from "react-native";

const socialLinks = [
  {
    id: "1",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111425.png",
    url: "https://github.com/NaufalYogaPratama",
  },
  {
    id: "2",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    url: "https://www.linkedin.com/in/naufal-yoga-pratama-817856312/",
  },
];

const SocialMediaLinks = () => {
  return (
    <View style={styles.container}>
      {socialLinks.map((link) => (
        <TouchableOpacity
          key={link.id}
          onPress={() => Linking.openURL(link.url)}
          style={styles.touchable}
        >
          <Image source={{ uri: link.icon }} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  touchable: {
    marginHorizontal: 10,
  },
  icon: {
    width: 27,
    height: 27,
  },
});

export default SocialMediaLinks;
