import React, { useState, useEffect } from 'react'
import { 
    StyleSheet,
     Text, 
     View, 
     ScrollView, 
     FlatList, 
     SafeAreaView,
      Animated, 
      TouchableOpacity, 
      Dimensions, 
      TextInput 
    } from 'react-native';
import Card from '../Components/Card';
import {GETmovies, SearchMovies }from '../Services'

export default function SearchScreen ( { route } ){

    const [photos, setPhotos ] = useState([])
    const { request } = route.params


    useEffect(() => {
        const Search = async () => {
            try {
                const data = await SearchMovies(request)
                setPhotos(data)
                console.log(photos)
    
            } catch (error) {
                console.error(error)
            }
        }

        Search()
    },[])
    

    return(
    <View style={{backgroundColor:'red', marginTop: 200}}>
        <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
        <Card 
            images={ item.urls.regular }
            description={ item.alt_description }
            id={ item.id }/>)}
        horizontal
        showHorizontalScrollIndicator
        />
    </View>
    )


}

