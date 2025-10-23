import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Exemplo4() {

    useEffect(() => {
        const intervalo = setInterval(() =>{
            console.log("A cada 2 segundos essa função é executada!");
            
        },2000)

        return () => clearInterval(intervalo)
    },[])

    return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>⏱️ Intervalo ativo</Text>
    </View>
    )
}

const styles = StyleSheet.create({})