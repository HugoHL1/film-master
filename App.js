
import React from 'react';
import SearchScreen from "./src/screens/SearchScreen";
import {View, Image, StyleSheet} from "react-native";
import Section from "./src/components/Section";
import Category from "./src/components/Category";

export default function App() {
  return (
      <View >
        <Section />
        <View style={styles.button}>
        <Category/>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  button: {
        paddingVertical: 12,
        paddingHorizontal: 12,
  },
})