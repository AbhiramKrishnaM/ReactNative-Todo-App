import React, {useState} from "react";
import {TextInput, View, StyleSheet} from "react-native";
import CustomButton from "./CustomButton";

const RenderTodo = (props) => {
  const [todo, setTodo] = useState("");
  function textHandle(enteredTodo) {
    setTodo(enteredTodo);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Todos here...."
          style={styles.inputField}
          onChangeText={textHandle}
        />
      </View>
      <CustomButton onPress={props.todoHandler.bind(this, todo)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
  },
  inputField: {
    padding: 15,
    fontSize: 20,
    color: "orange",
  },
});

export default RenderTodo;
