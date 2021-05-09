import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Comment from "./Comment";
import Game_name from "./Game_name";

export default function PaginaAvatars() {
  const [userList, setUserList] = useState([]);

  const loadUsers = async () => {
    const resp = await fetch(`https://randomuser.me/api/?results=5`);
    const json = await resp.json();
    setUserList(json.results);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Game_name></Game_name>
        <Text></Text>
      </View>
      {userList.map((user) => (
        <Comment user={user} text="Boníssim" rate="Perfect" key={user.email} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B174A",
    alignItems: "center",
    justifyContent: "center",
  },
});