import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Saudacao() {

    const [nome, setNome] = useState<string>('')

    return (
        <View style={styles.container}>
            <TextInput placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome} />
            <Text style={styles.text}>Olá {nome}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});