import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post(props: { title: string,texto:string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Image style={styles.img} source={require('../assets/images (1).jpg')} />
            <Text style={styles.postText}>{props.texto}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        gap:15,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    img:{
        width:350,
        height:200,
        borderRadius:15
    },
    text:{
        fontSize:20,
    },
    postText:{
        fontSize:16
    }
})