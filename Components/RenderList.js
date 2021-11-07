import React from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";

const RenderList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>
      <FlatList
        data={props.todoData}
        renderItem={(itemData) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.listContainer}
            onPress={props.deleteTodo.bind(this, itemData.item.key)}
          >
            <Text style={styles.listText}>{itemData.item.value}</Text>
          </TouchableOpacity>
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
