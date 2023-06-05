import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';


export default function Card({images, id, description}){
    
    return(
        <View key={id} style={styles.container}>

            <Image 
            style={styles.image}
            source={{
                uri: images
            }}/>
            <Text style={styles.movieName}>{description }</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius:30,
      backgroundColor:'rgba(207,209,208,0.2)',
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 30,
      resizeMode: 'cover'
    },
    movieName: {
      width: 100,
      fontSize:15,
      top: 10,
      textAlign: 'center',
      color:'#4287f5'
    },
  });
  