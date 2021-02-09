import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default function Category({ text, OnPress }) {
      return(
            <TouchableOpacity onPress={OnPress} >
                  <View style={styles.button_category}>
                        <Text style={styles.button_text_category}>Action</Text>
                  </View>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      button_category: {
            paddingVertical: 12,
            height: 60,
            width: 150,
            backgroundColor: '#ffffff',
            shadowOffset:{  width: 0,  height: 4,  },
            shadowColor: '#B00020',
            shadowOpacity: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
      },
      button_text_category: {
            color: '#B00020',
            fontWeight: 'bold',
            fontSize: 20,
      }
})
