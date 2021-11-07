import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const CustomButton = ({onPress, title, type = "default", style}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={style}>
      <View style={type == "second" ? styles.container2 : styles.container}>
        <Text style={type == "second" ? styles.text2 : styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 17,
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    marginBottom: 20,
  },
  container2: {
    padding: 17,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "orange",
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  text2: {
    color: "orange",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default CustomButton;
