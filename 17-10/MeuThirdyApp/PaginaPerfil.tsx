import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import PerfilBar from './components/PerfilBar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Post from './components/Post'
import jsonData from './info.json'


export default function PaginaPerfil() {

    const posts = jsonData["infos"];
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <PerfilBar nome={posts[0].nome} />
                    {posts.map((item, index) => (
                        <Post
                            key={index}
                            image={item.image}
                            title={item.titulo}
                            texto={item.texto} />
                    ))}

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({})