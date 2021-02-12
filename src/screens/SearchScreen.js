import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, ActivityIndicator, Image} from "react-native";
import {Search} from "../components/Search";
import {ResultSearch} from "../components/ResultSearch";
import {FilmItem} from "../components/FilmItem";
import {searchMovie} from "../services/movie";

export default class HomePage extends React.Component {
    state = {
        searchText: '',
        filmsState: [],
        isLoading: false,
    }
    page;
    totalPages;

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
    }



    _searchFilms = () => {
        //Permet de réinitialiser le state entre deux recherches différentes
        this.page = 0;
        this.totalPages = 0;
        this.setState({filmsState: []});

        this._loadFilms();
    }

    handleSearchText = (text) => {
        this.setState({searchText: text})
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        searchMovie(this.state.searchText, this.page + 1)
            .then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
    }

    _renderResult = () => {
        if (this.state.filmsState.length > 0) {
            return <View>
                <FlatList
                    data={this.state.filmsState}
                    renderItem={({item}) => <FilmItem film={item} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms();
                        }
                    }}
                />
            </View>
        }

        return <View style={styles.no_found_container}>
                    <Image
                        style={styles.status_logo}
                        source={require('../../assets/images/bad.png')}
                    />
                    <Text
                        style={styles.text_no_result}>Aucune recherche effectuée
                    </Text>
                </View>
    }

    render() {
        const {searchText} = this.state;
        return (
            <SafeAreaView style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Image
                        style={styles.image_logo}
                        source={require('../../assets/images/logo.png')}
                    />
                </View>
                <Search handleSearch={this.handleSearchText} handleClickButton={this._searchFilms}/>
                    {this.state.searchText !== '' ? <ResultSearch textSearched={searchText}/> : null}
                    {this._renderResult()}
                    {this.state.isLoading ?
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color={'#000'} />
                </View>
                : null
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    result_container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    text_no_result: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    no_found_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading_container: {
        bottom: 300
    },
    text_no_result: {
        width: 250,
        color: '#b5a90f',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logo_container: {
        alignItems:'center',
    },
    image_logo: {
        width: 200,
        height: 200,
        marginVertical: 15,
    },
    status_logo: {
        width: 125,
        height: 125,
        marginBottom: 20,
    }
})