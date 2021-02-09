import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmCard extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>  
        <Image
          style={styles.image}
          source={require('../../assets/images/starwars.jpg')}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Nom du film</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.date_text}>1995</Text>
          </View>
          <View style={styles.director_container}>
            <Text style={styles.director_text}>Nom réalisateur</Text>
          </View>
        </View>
        <View style={styles.vote_container}>
            <Text style={styles.vote_text}>9</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  main_container: {
    marginTop: 15,
    marginHorizontal: 10,
    height: 150,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: '#B00020',
    shadowOpacity: 0.7,
  },

  image: {
    flex: 2,
    resizeMode: 'contain',
  },

  content_container: {
    justifyContent: 'space-around',
    flex: 3,
    margin: 10
  },

  header_container: {

  },

  title_text: {
    color: '#B5A90F',
    fontWeight: 'bold',
    fontSize: 20,
  },

  date_container: {

  },

  date_text: {
    color: '#B5A90F',
    fontSize: 15,
  },

  director_container: {

  },
  director_text: {
    color: '#B5A90F',
    fontSize: 15,
  },

  vote_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
  },

  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#B00020'
  },
})

export default FilmCard