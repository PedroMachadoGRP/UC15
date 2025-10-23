import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Exemplo() {


    useEffect(() => {
        console.log('O componente apareceu na tela');

    }, [])
    return (
        <View>
            <Text>Qualquer coisa</Text>
        </View>
    )
}

const styles = StyleSheet.create({})