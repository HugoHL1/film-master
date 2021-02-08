import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

class Section extends React.Component {
    render() {
        return (
            <View style = {styles.main_container_section}>
                <View style = {styles.arrow_section}>
                    <Image
                     source={require('../../assets/images/arrow.png')}
                     style={styles.arrow_logo}
                    />
                </View>
                <View style = {styles.container_text_section}>
                    <Text style = {styles.title_text_section}>AVENTURE</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container_section: {
        height: 100,
        backgroundColor: '#B00020',
        borderRadius: 25,
        flexDirection: 'row',
    },

    container_text_section: {
        flex:2,     
        justifyContent:'center',
    },

    title_text_section:{
        color:'#B5A90F',
        fontWeight: 'bold',
        fontSize: 20,
    },

    arrow_section:{
        flex:1,
        justifyContent:'center',
        paddingLeft:10,

    },

    arrow_logo:{
        height: 25,
        width: 25,

    },
})

export default Section