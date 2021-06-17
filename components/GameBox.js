import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image } from "react-native";
import BotoPreferit from "../components/BotoPreferit";
import { useFonts } from "expo-font";


const Game = ({ game, navigation }) => {
  
  return (
    <View id={game.id} onTouchEnd={() => navigation.navigate('Details',{gameID: game.id})}>
      <Image style={styles.bgImage} source={{ uri: game.background_image }} />
     
      <View style={styles.game}>
        <BotoPreferit style={styles.likeButton}></BotoPreferit>
        <Text style={styles.name}>
          {game.name}
        </Text>
        <Text style={styles.gameScore}>
          {game.metacritic}
        </Text>
        {game.genres.map(genre => <Text style={styles.genre}> {genre.name},</Text>)}
      </View>
    </View>
  );
};

function Details({route}){
  const {gameID} = route.params;
  return(
      <View>
          <Text>{JSON.stringify(gameID)}</Text>
      </View>
  )
};

export default function GameBox() {
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
    <View style={styles.container}>
      <Text style={styles.title}>All Games</Text>
      <FlatList
        data={gameDetails}
        renderItem={({ item }) => <Game game={item} />}
        keyExtractor={(item, index) => `${item.id}${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#220338",
    alignItems: "center",
    color: "white",
    padding: 50,
    height: 10000,
    
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    color:"#E6FF2E",
    fontFamily:"Montserrat-Black",
    paddingBottom:20,
    fontSize:30,
    alignContent:'flex-start'
  },
  likeButton: {
    position:'absolute',
    top:10,
    left:120,
    backgroundColor:"#00FF75"
  },
  game: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    //padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(146,0,250,0.25)",
    height: 150,
    width: 150,
    position: 'absolute'

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
    bottom: 50,
    left: 10,
    alignContent: "center",
    color: "#E6FF2E"
  },
  gameScore: {
    fontFamily: "Montserrat-Regular",
    backgroundColor: "rgba(50,50,50,0.50)",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#C9FF2E",
    padding: 3,
    fontSize: 10,
    color: "#00FF75",
    textAlign: 'center',
    position: "absolute",
    bottom: 20,
    left: 115,

  },
  genre: {
    fontFamily: "Montserrat-Regular",
    position: "absolute",
    bottom: 30,
    left: 10,
    alignContent: "center",
    color: "white"
  },


});