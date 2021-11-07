import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

import RenderTodo from "./Components/RenderTodo";
import RenderList from "./Components/RenderList";
export default function App() {
  const [todos, setTodos] = useState([]);
  function todoHandler(newTodo) {
    setTodos((previousTodo) => [
      ...previousTodo,
      {value: newTodo, key: Math.random().toString()},
    ]);
  }
  return (
    <View style={styles.container}>
      <RenderTodo todoHandler={todoHandler} />
      <RenderList todoData={todos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
});
