import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function Saudacao() {
  return (
    <Text style={styles.text}>
        Hello People
    </Text>
  )
}

const styles = StyleSheet.create({
    text:{
        color :'red',
        fontSize:24
    }
})
