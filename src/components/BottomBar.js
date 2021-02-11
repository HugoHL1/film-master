import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';


export default class BottomNavigator extends Component {

    toggleOpen = () => {


    }

    render() {
        return (
            <View style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  border: 2,
                  radius: 3,
                  shadowOpacity: 0.3,
                  shadowRadius: 3,
                  shadowOffset: {
                  height: 3, width: 3
                  },
                  x: 0,
                  y: 0,
                  style: { marginVertical: 5 },
                  bottom: 0,
                  width: '100%',
                  height: 70,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingVertical: 10,
                  paddingHorizontal: 25
            }}>
                  <View style={{
                  flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                  }}>
                  <TouchableOpacity onPress={() => { Alert.alert('go sur la page home') }}>
                        <Image
                              style={{ width: 30, height: 30 }}
                              source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}
                              onPress={()=>{Alert.alert("")}}
                        >
                        </Image>
                  </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                        </View>
                        <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                        }}>
                  <TouchableOpacity
                        onPress={() => { Alert.alert("go sur la page recherche") }}
                  >
                        <Image
                              style={{  width: 30, height: 30 }}
                              source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                              onPress={() => { Alert.alert("") }}
                        />
                  </TouchableOpacity>
                  <Text style={{justifyContent:'center',alignItems:'center' }}>search </Text>
                  </View>
            </View>
        );
    }

    
}
