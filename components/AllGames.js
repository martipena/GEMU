import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image } from "react-native";
import Demo from "./Demo";

import { useFonts } from "expo-font";


const Game = ({ game }) => {
  return (
    <View style={styles.game}>
      <Image style={styles.bgImage} source={{ uri: game.background_image }} />
      <Text style={styles.name}>
        {game.name}
      </Text>
      <View style={styles.platformsDiv}>
        <Image style={styles.platformImage} source={game.platforms.platform} />
      </View>
      <View>
        

          {game.genres.map(genre => <Text>{genre.name}</Text>)}
        
        <Text style={styles.gameScore}>
          {game.metacritic}
        </Text>
      </View>

    </View>
  );
};

export default function AllGames() {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
  });
  const [gameDetails, setGameDetails] = useState(null);

  const loadGameDetails = async () => {
    const response = await fetch(`https://api.rawg.io/api/games?key=511084e1f425491089c17b0d2c21354a&page-size=1`);
    const json = await response.json();
    setGameDetails(json.results);
  };


  useEffect(() => {
    loadGameDetails();
  }, []); /* variables que si canvien haurien de re-executar la 
             funció del useEffect */

  if (gameDetails === null) {
    return (
      <View style={styles.emptyList}>
        <ActivityIndicator size="large" color="#aab" />
      </View>
    );
  }
  return (
    <Demo>
      <FlatList
        data={gameDetails}
        renderItem={({ item }) => <Game game={item} />}
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
  game: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bgImage: {
    height: 150,
    width: 150,
    borderRadius: 30,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  name: {
    fontFamily: "Montserrat-Black",
    position: "absolute",
    bottom:10
  },
  gameScore: {
    fontFamily: "Montserrat-Black",
    backgroundColor: "rgba(50,50,50,0.25)",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#C9FF2E",
    padding: 4,
    fontSize: 10

  }


});