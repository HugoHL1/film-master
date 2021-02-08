import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

class Section extends React.Component {
    render() {
        return (
            <View style = {styles.main_container_section}>
                <Text style = {styles.title_text_section}>Aventure</Text>
                <Image
                    style={styles.arrow_logo}
                    source={require('./src/images/arrow.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container_section: {
        height: 100,
        backgroundColor: '#B00020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    title_text_section:{
        color:'#B5A90F',
        fontWeight: 'bold',
        fontSize: 25,
    },

    arrow_logo:{
        
    },
})

export default Section