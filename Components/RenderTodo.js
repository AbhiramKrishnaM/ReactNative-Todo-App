import React, {useState} from "react";
import {TextInput, View, StyleSheet, Modal} from "react-native";
import CustomButton from "./CustomButton";

const RenderTodo = (props) => {
  const [todo, setTodo] = useState("");
  function textHandle(enteredTodo) {
    setTodo(enteredTodo);
  }
  return (
    <Modal visible={props.isModal} animationType="fade">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Todos here...."
            style={styles.inputField}
            onChangeText={textHandle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => {
              props.todoHandler(todo);
              props.setModal(false);
            }}
            title="Enter Todo"
            style={{flex: 1, marginRight: 10}}
          />
          <CustomButton
            type="second"
            title="Cancel"
            onPress={props.setModal.bind(this, false)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "80%",
    flex: 1,
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: "row",
  },
});

export default RenderTodo;
