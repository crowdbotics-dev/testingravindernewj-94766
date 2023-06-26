import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.OkByQDFv}></ScrollView>
    <Text style={styles.sHugxVQb}>Login</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  OkByQDFv: {
    width: 356,
    height: 230,
    position: "absolute",
    left: 0,
    top: 162
  },
  sHugxVQb: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    left: 60,
    top: 182,
    width: 201,
    height: 125
  }
});
export default Untitled3;