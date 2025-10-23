import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Exemplo3() {

    const [contado, setContador] = useState(0);
    const [contador2, setContador2] = useState(0)

    useEffect(() => {
        console.log('O contador mudou', contado);

    }, [contado,contador2])
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Contador: {contado}</Text>
            <Button title="Aumentar" onPress={() => setContador(contado + 1)} />

            <Text style={{ fontSize: 20 }}>Contador: {contador2}</Text>
            <Button title="Aumentar" onPress={() => setContador2(contador2 + 1)} />

        </View>
    )
}

const styles = StyleSheet.create({})