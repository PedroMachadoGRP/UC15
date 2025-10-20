import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PerfilBar(props: { nome: string }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/images (2).jpg')} />
            <Text style={styles.text}> {props.nome} </Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        color: 'black'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})