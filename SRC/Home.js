import React, {useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Animated, Easing, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Card from '../Components/Card';
import axios from 'axios';
import {GETmovies, SearchMovies }from '../Services';



export default function Home({ navigation }){

    const { width, height } = Dimensions.get('screen')

    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult ] = useState([])

    const ItemSize = width * 0.72

    scrollX = useRef(new Animated.Value(0)).current
    const [movies, setMovies ] = useState([])


    useEffect(
        ()=> {
            const fetchposts = async () => {
                try {
                    const data = await GETmovies()
                    setMovies(data)
                } catch (error) {
                    console.error('Error fetching movies:', error)
                }
            }

            fetchposts()
        },[]
    )
    return(
        <View style={styles.container}>
            <SafeAreaView>

                <View style={styles.searchArea}>
                <TextInput placeholder="search for a pitcure" onChangeText={(text) => setSearch(text)} style={styles.searchBar}/>
                <TouchableOpacity onPress={() => 
                                                navigation.navigate('SearchScreen', { request: search})} 
                style={
                    styles.button
                }>
                </TouchableOpacity>
                </View>






            <Animated.FlatList
                onScroll={
                    Animated.event(
                    [{ nativeEvent: { contentOffset: {x: scrollX}}}],
                    { useNativeDriver: true })
                }
                scrollEventThrottle={16}


                data={movies}

                    renderItem={ ( { item, index } ) => {
                    const inputRange = [
                                (index - 1) * ItemSize,
                                index * ItemSize,
                                (index + 1) * ItemSize
                                ]
                    const translateY = scrollX.interpolate({
                                inputRange,
                             outputRange: [-25, -50, -25],
                             extrapolate: 'clamp'
                            })


                        return(
                    <View style={styles.ListContainer}>
                                <View style={{         width: ItemSize / 3,
                                                     height: ItemSize
                                                     }}/>
                                <Animated.View
                                    style={{
                                            transform: [{ translateY }]
                                            }}>

                            <Card 
                            images={ item.urls.small }
                            description={ item.alt_description }
                            id={ item.id }/>

                                </Animated.View>
                                <View style={{         width: ItemSize / 2,
                                                        height: ItemSize
                                                        }}/>
                </View>)

                }   }



                contentContainerStyle={{
                    alignItems: 'center'
                }}
                horizontal
                pagingEnabled
                showHorizontalScrollIndicator
                bounces={false}
                keyExtractor={(item) => item.id}
                snapToInterval={ItemSize}
                decelerationRate={0}
                />


                
               </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    ListContainer: {
        flexDirection: 'row',
        marginTop:50,
    },
    container: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    subcontainer:{
        alignItems:'Top',
    },
    image: {
      height: 200,
      width: 120,
      borderRadius: 6,
    },
    movieName: {
      position: 'absolute',
      width: 100,
      top: 10,
      textAlign: 'center',
    },
    searchArea:{
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 30,
    },
    searchBar:{
        width: '60%',
        height: 15,

    },
    button: {
        width: '15%',
        height: 50,
        borderRadius: 50,
        backgroundColor:'red'
    }
  });
  