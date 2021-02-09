import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image, TouchableOpacity, Text} from "react-native";

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <Image source={require('../../assets/images/loupe.jpg')} style={styles.picto}/>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.button_search}>
                <TouchableOpacity
                    style={styles.button_style_search}
                    disabled={isDisabled}
                    onPress={() => props.handleClickButton()}
                >
                    <Text style={styles.button_style_search_text} >RECHERCHER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        padding: 30,
        backgroundColor: '#b00020',
        borderRadius: 15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        height: 50,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#b00020'
    },
    button_search: {
        alignItems: 'flex-end'
    },
    button_style_search: {
        marginTop: 10,
        backgroundColor: '#B5A90F',
        borderRadius: 5
    },
    button_style_search_text: {
        padding: 10,
        paddingRight: 15,
        paddingLeft: 15,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})