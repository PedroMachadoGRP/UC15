import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
    const [contador, setcontador] = useState(0);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Você clicou {contador} vezes</Text>
            <Button title= "clique aqui" onPress={() => setcontador(contador + 1)}>
            </Button>
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