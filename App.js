import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from "react-native";
import BotoPreferit from "./components/BotoPreferit";
import PaginaAvatars from "./components/PaginaAvatars";
import GameList from "./components/GameList";
import GameSearch from "./components/GameSearch";
import GameBox from "./components/GameBox";
import Details from "./components/GameBox";
import Categories from "./components/Categories";
import Logo from "./assets/GemuMenu.png";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*
export default function App() {
  return (
      <View style={styles.container}>
        <BotoPreferit />
        <StatusBar style="auto" />
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
const Stack = createStackNavigator();

const Paragraph = (props) => {
  return <Text style={styles.paragraph}>{props.children}</Text>;
};
export default function App() {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
  });
  const [search, setSearch] = useState("");
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GameBox" component={GameBox} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>

    /*<ScrollView>
      <GameBox />
      <Categories/>
      <View style={styles.page}>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
        <Text style={styles.title}>
          <Text style={styles.strong}>GEMU</Text>
        </Text>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
        <Paragraph>
          Lorem fistrum ese que llega se calle ustée ese que llega me cago en tus
          muelas te voy a borrar el cerito al ataquerl quietooor no puedor.
        </Paragraph>
      </View>
      <Text style={styles.title}>
        <Text style={styles.strong}>Botó preferit</Text>
      </Text>
      <View style={styles.container}>
        <BotoPreferit />
        <StatusBar style="auto" />
      </View>
      <Text style={styles.title}>
        <Text style={styles.strong}>Analisis</Text>
      </Text>
      <View style={styles.container}>
        <PaginaAvatars />
      </View>
      <Text style={styles.title}>
        <Text style={styles.strong}>Llista jocs</Text>
      </Text>
      <View style={styles.container}>
        <GameList />
        <StatusBar style="auto" />
      </View>
      <Text style={styles.title}>
        <Text style={styles.strong}>Buscar</Text>
      </Text>
      <View style={styles.container}>
        <TextInput style={styles.searchBox} value={search} onChangeText={setSearch} />
        <GameSearch search={search} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>*/
  );
}

const styles = StyleSheet.create({
  appBG: {
    backgroundColor: "#220338",
    alignItems: "center",
    color: "white",
    padding: 50,
    height: 10000,
    flex: 1,

  },
  logoContainer: {
    width: 50,
    height: 50
  },
  logoMenu: {
    width: 50,
    height: 50
  }
  /*container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "green",
    opacity: 1,
    // elevation: 10,
    shadowColor: "black",
  },
  box2: {
    width: 100,
    height: 200,
    backgroundColor: "blue",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "yellow",
  },
  paragraph: {
    marginBottom: 10,
    lineHeight: 20,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "blue",
    width: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    textAlignVertical: "center",
  },
  strong: {
    color: "red",
  },
  emph: {
    fontStyle: "italic",
    color: "green",
  },
  groucho: {
    // width: 300,
    height: 200,
    aspectRatio: 1.8,
    borderWidth: 1,
    borderColor: "black",
    resizeMode: "cover",
  },
  searchBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccd",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },*/
});
