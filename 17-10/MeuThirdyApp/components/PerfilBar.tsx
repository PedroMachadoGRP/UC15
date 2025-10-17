import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PerfilBar(props: { nome: string }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/blank-profile-picture-973460_960_720.png')}/>
            <Text style={styles.text}>{props.nome} </Text>/
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        borderRadius: 45
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        padding:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    }
})