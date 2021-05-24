import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image } from "react-native";

const Game = ({ game }) => {
  return (
    <View style={styles.user}>
      <Image style={styles.avatar} source={{ uri: game.background_image }} />
      <Text style={styles.name}>{game.name}</Text>
      {game.genres.map(genre => <Text>{genre.name}</Text>)}
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

export default function GameList() {
  const [gameList, setGameList] = useState(null);

  const loadGames = async () => {
    const response = await fetch(`https://api.rawg.io/api/games?key=eef82f80fe454253ad3e002f9b13b82e`);
    const json = await response.json();
    setGameList(json.results);
  };

  useEffect(() => {
    loadGames();
  }, []); /* variables que si canvien haurien de re-executar la 
             funció del useEffect */

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
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    bottom: 0 
  },
  separator: {
    height: 1,
    backgroundColor: "#dde",
    marginLeft: 70,
  },
});