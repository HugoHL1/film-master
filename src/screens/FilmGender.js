import React, {Component} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Button } from 'react-native';
import Section from "../components/Section";
import FilmCard from "../components/FilmCard";

export default function FilmGender() {
    return (
        <View style = {styles.homepage}>
            <View style = {styles.section_container}>
                <Section/>
            </View>
            <View style = {styles.filmCard_container}>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
            </View>
        </View>
  
    );
  }

const styles = StyleSheet.create({

    homepage: {
        flex:1,
    },

    section_container: {
        flex:0.2,
    },

    filmCard_container: {
        flex:1,
    },

})

    