import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from "react-native";

const Game = ({ game }) => {
  return (
    <View style={styles.beer}>
      <Image style={styles.image} source={{ uri: game.background_image }} />
      <Text style={styles.name}>{game.name}</Text>
    </View>
  );
};

export default function GameList({ search }) {
  const [gameList, setGameList] = useState(null);

  const loadGames = async () => {
    //const response = await fetch(`https://rawg.io/api/games/${search}?key=eef82f80fe454253ad3e002f9b13b82e`);
    const response = await fetch(`https://rawg.io/api/games?search=${search}`);
    const json = await response.json();
    setGameList(json);
  };

  useEffect(() => {
    loadGames();
  }, [search]);

  if (gameList === null) {
    return (
      <View style={styles.emptyList}>
        <ActivityIndicator size="large" color="#aab" />
      </View>
    );
  }
  return (
    <FlatList
      data={gameList}
      renderItem={({ item }) => <Game game={item} />}
      keyExtractor={(item, index) => `${item.id}${index}`}
    />
  );
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  beer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
  },
});