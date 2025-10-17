import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SaudacaoNome(props:{nome:string}){
  return (
    <View>
      <Text style={styles.text}>Ola {props.nome}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'blue'
    }
})