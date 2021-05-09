import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BotoPreferit from "./components/BotoPreferit";
import PaginaAvatars from"./components/PaginaAvatars";
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
const Paragraph = (props) => {
  return <Text style={styles.paragraph}>{props.children}</Text>;
};
export default function App() {
  return (
    <ScrollView>
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
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
