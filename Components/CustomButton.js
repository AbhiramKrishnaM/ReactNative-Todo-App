import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const CustomButton = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter Todo</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default CustomButton;
