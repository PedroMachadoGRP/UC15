import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTema } from '../context/TemaContext'




export const  Botao = () => {
    const {temaEscuro,setTemaEscuro} = useTema()

    return (
        <Button
            title={temaEscuro ? 'mudar para claro' : 'mudar para escuro'}
            onPress={() => setTemaEscuro(!temaEscuro)}
        />
    )
}

const styles = StyleSheet.create({})