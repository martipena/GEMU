import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image } from "react-native";
import Demo from "./Demo";
import { useFonts } from "expo-font";


const Category = ({ category }) => {
  return (
    <View style={styles.categoryDiv}>
      <Text style={styles.category}>
        {category.name}
      </Text>
    </View>
  );
};

export default function Categories() {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
  });
  
  const [getCategory, setCategory] = useState(null);

  const loadCategories = async () => {
    const response = await fetch(`https://api.rawg.io/api/genres?key=511084e1f425491089c17b0d2c21354a`);
    const json = await response.json();
    setCategory(json.results);
  };


  useEffect(() => {
    loadCategories();
  }, []); /* variables que si canvien haurien de re-executar la 
             funció del useEffect */

  if (getCategory === null) {
    return (
      <View style={styles.emptyList}>
        <ActivityIndicator size="large" color="#aab" />
      </View>
    );
  }
  return (
    <Demo>
      <FlatList
        data={getCategory}
        renderItem={({ item }) => <Category category={item} />}
        keyExtractor={(item, index) => `${item.id}${index}`}
      />
    </Demo>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C9FF2E",
    borderWidth: 2,
    margin: 4,
    borderRadius: 28,
    height: 25,
    padding: 5
  },
  category: {
    fontFamily:"Montserrat-Black",
    fontSize: 16
  },


});