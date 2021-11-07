import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

import RenderTodo from "./Components/RenderTodo";
import RenderList from "./Components/RenderList";
import CustomButton from "./Components/CustomButton";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModal, setIsModal] = useState(false);

  function setModal(value) {
    setIsModal(value);
  }

  function todoHandler(newTodo) {
    setTodos((previousTodo) => [
      ...previousTodo,
      {value: newTodo, key: Math.random().toString()},
    ]);
  }

  function deleteTodo(todoId) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.key !== todoId);
    });
  }
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={setModal.bind(this, true)}
        title="Enter your Todo"
      />
      <RenderTodo
        setModal={setModal}
        isModal={isModal}
        todoHandler={todoHandler}
      />
      <RenderList todoData={todos} deleteTodo={deleteTodo} />
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
