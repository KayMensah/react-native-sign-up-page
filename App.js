import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Signup from "./src/components/Signup";

const App = () => {
  return <Signup />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
