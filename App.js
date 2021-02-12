
import React from 'react';
import SearchScreen from "./src/screens/SearchScreen";
import {View, Image, StyleSheet} from "react-native";
import Section from "./src/components/Section";
import Category from "./src/components/Category";
import FilmCard from "./src/components/FilmCard";
import FilmItem from "./src/components/FilmItem";
import BottomBar from "./src/components/BottomBar";
import HomePage from "./src/screens/HomePage";
import FilmGender from "./src/screens/FilmGender";

export default function App() {
  return (
      <View style = {styles.background}>
        <FilmGender/>
        <BottomBar />
      </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor: '#F4F4F4'
  }

})