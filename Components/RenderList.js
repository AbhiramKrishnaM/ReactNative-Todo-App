import React from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";

import CustomButton from "./CustomButton";
const RenderList = (props) => {
  return (
    <View style={styles.container}>
      {props.todoData.length !== 0 ? (
        <Text style={styles.title}>Todos</Text>
      ) : (
        <Text style={styles.title}>No todos </Text>
      )}

      <FlatList
        data={props.todoData}
        renderItem={(itemData) => (
          <CustomButton
            title={itemData.item.value}
            type="second"
            onPress={props.deleteTodo.bind(this, itemData.item.key)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: 30, width: "80%"},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 20,
    alignSelf: "center",
  },
  listContainer: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "orange",
    alignItems: "center",
    marginBottom: 15,
  },
  listText: {
    color: "orange",
  },
});
export default RenderList;
