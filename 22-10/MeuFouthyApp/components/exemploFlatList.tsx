import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function exemploFlatList() {
const dados = ["Cachorro","Gato","Leão","puma"]

  return (
    <View>
        <FlatList data={dados} keyExtractor={(index) => index.toString()} renderItem={({item}) => 
            <Text>
                {item}
            </Text>
        }>

        </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})