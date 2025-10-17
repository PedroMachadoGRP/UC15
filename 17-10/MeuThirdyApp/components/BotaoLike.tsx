import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


export default function BotaoLike() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>☹</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 250,
        height: 50,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        end: 'auto'
    }, btn: {
        backgroundColor: '#ffffff',
        padding:4,
        gap:30,
        alignItems:'flex-end',
        width:360
    },
    text: {
        fontSize: 30,
        color:'black',
        borderRadius:30,
    }
})