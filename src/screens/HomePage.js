import React, {Component} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Button } from 'react-native';
import {Search} from "../components/Search";
import {ResultSearch} from "../components/ResultSearch";
import Category from "../components/Category";

export default function HomePage() {
    return (
        <View style = {styles.homepage}>
            <View style = {styles.logo_container}>
                <Image
                    style={styles.status_logo}
                    source={require('../../assets/images/logo.png')}
                />
            </View >
            <View style = {styles.button_container_global}>
            <View style = {styles.button_container1}>
                <Category text= "Action"/>
                <Category text= "Animation"/>
                <Category text= "Crime"/>
                <Category text= "Drame"/>
                <Category text= "Fantastique"/>
                <Category text= "Horreur"/>
            </View>
            <View style = {styles.button_container2}>
                <Category text= "Aventure"/>
                <Category text= "Comédie"/>
                <Category text= "Documentaire"/>
                <Category text= "Familial"/>
                <Category text= "Histoire"/>
                <Category text= "Musique"/>
            </View>
            </View>
        </View>
  
    );
  }

const styles = StyleSheet.create({

    homepage: {
        flex:1,
    },

    status_logo: {
        width: 125,
        height: 125,
        borderRadius: '70%',
        borderColor: '#b00020',
        borderWidth: 8,
    },

    logo_container: {
        flex:0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button_container_global: {
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 13,
    },

    button_container1: {
        flex:1,

    },

    button_container2: {
        flex:1,
        alignItems: 'flex-end'
    }
})
