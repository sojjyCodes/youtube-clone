import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function HomeScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
