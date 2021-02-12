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
            <View style = {styles.button_container}>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </View>
        </View>
  
    );
  }

const styles = StyleSheet.create({

    homepage: {
        flex:1,
        marginBottom: 200

    },

    status_logo: {
        width: 125,
        height: 125,
    },

    logo_container: {
        flex:0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button_container: {
        flex:1,
        flexWrap: 'wrap',
        alignContent: 'space-around',

    }
})
