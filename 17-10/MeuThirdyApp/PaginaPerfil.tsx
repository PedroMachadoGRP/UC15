import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PerfilBar from './components/PerfilBar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Post from './components/Post'
import BotaoLike from './components/BotaoLike'

export default function PaginaPerfil() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <PerfilBar nome='Junior' />
                <Post title='Meu post' texto='awdjnawudhawuyfhbawyfbawyfbawybfaydbaywdbawtdvbwatdaywdbaydbaywdbnayw'/>
                <BotaoLike/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({})