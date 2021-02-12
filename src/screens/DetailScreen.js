import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated} from "react-native";
import {getLatest, getMovie} from "../services/movie";
import {Dimensions} from "react-native";

export const DetailScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);
    const [positionLeft, setPositionLeft] = useState(new Animated.Value(Dimensions.get('window').width));
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route && route.params && route.params.title ? route.params.title : 'Dernier film sortit'
        })
    })
    useEffect(() => {
        Animated.spring(
            positionLeft,
            {
                toValue: 0,
                speed: 50,
                bounciness: 50
            }
        ).start()
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
        } else {
            getLatest()
                .then(setMovie)
        }
    }, [])

    function handlePress() {
        if (movie) {
            Linking.canOpenURL(movie.homepage).then((supported) => {
                if (supported) {
                    Linking.openURL(movie.homepage);
                } else {
                    console.log("Don't know how to open URI: " + movie.homepage);
                }
            });
        }
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            {movie.title !== '' && <Animated.Text style={[styles.title, {left: positionLeft, color: "#B5A90F", fontWeight: "bold",}]}>{movie.title}</Animated.Text>}
                            {movie.production_companies.length > 0 && <Text style={styles.director}>{movie.production_companies[0].name}</Text>}
                            {movie.vote_average !== '' && <Text style={[styles.averageNote, movie.vote_average > 5 ? styles.good_film : styles.bad_film]}>{movie.vote_average}</Text>}
                        </View>
                        <Image source={require('../../assets/images/button_play.png')} style={styles.imagePlay} />
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' && <Text style={styles.overview}>{movie.overview}</Text>}
                </View>
            </ScrollView>
            {movie.homepage !== '' && (
                <View style={styles.footer}>
                    <Button color="#B5A90F" onPress={handlePress} title="Trailer" />
                </View>
            )}
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    imageBg: {
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
    },
    headerInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 15,
        paddingLeft: 15,
        borderRadius: 15,
    },
    image: {
        borderColor: "#ffffff",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-start",
        height: 58,
        width: 58,
    },
    director: {
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 10,
        color: "#B5A90F",
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -35,
        zIndex: 1,
    },
    averageNote: {
        fontWeight: 'bold',
        color: "#B5A90F",
    },
    good_film: {
        color: 'green'
    },
    bad_film: {
        color: 'red',
    },
    overview: {
        lineHeight: 24,
        color: "#B5A90F",
    },
    overviewTitle: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
        color: "#B5A90F",
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: "#ffffff",
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2
    },
})
