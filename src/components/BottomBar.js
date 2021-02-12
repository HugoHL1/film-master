import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';


export default class BottomNavigator extends Component {

    render() {
        return (
            <View style={{
                  position: 'absolute',
                  backgroundColor: '#b00020',
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
                  flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,
                  }}>
                  <TouchableOpacity onPress={() => { Alert.alert('go sur la page home') }}>
                        <Image
                              style={{ width: 30, height: 30 }}
                              source={require('../../assets/images/home.png')}
                              onPress={()=>{Alert.alert("")}}
                        >
                        </Image>
                  </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center', color: '#fff'}}>Accueil</Text>
                        </View>
                        <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                        }}>
                  <TouchableOpacity
                        onPress={() => { Alert.alert("go sur la page recherche") }}
                  >
                        <Image
                              style={{  width: 30, height: 30,}}
                              source={require('../../assets/images/loupe.png')}
                              onPress={() => { Alert.alert("") }}
                        />
                  </TouchableOpacity>
                  <Text style={{justifyContent:'center',alignItems:'center', color: '#fff'}}>Recherche</Text>
                  </View>
            </View>
        );
    }

    
}
