import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "b2/HnECv2aLJ8LyVtfUKhw==kf8BPwngb7sY7k4W";

  const fetchQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=fitness",
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const renderQuote = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.quote}</Text>
      <Text style={styles.author}>{item.author || "Unknown Author"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quotes</Text>
      {quotes.length > 0 ? (
        <FlatList
          data={quotes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderQuote}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.loadingText}>
          {isLoading ? "Loading quotes..." : "No quotes available"}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={fetchQuotes}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Refreshing..." : "Refresh Quotes"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    color: "#2c3e50",
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#95a5a6",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#17161C",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: "#a0a0a0",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Quotes;
