
import React from 'react';
import SearchScreen from "./src/screens/SearchScreen";
import {View, Image, StyleSheet} from "react-native";
import Section from "./src/components/Section";
import Category from "./src/components/Category";
import FilmCards from "./src/components/FilmCards";

export default function App() {
  return (
      <View style = {styles.background}>
        <FilmCards/>
      </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#F4F4F4'
  }

})