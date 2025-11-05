import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreenProps } from '../interface/NavigationInterfaces';


export default function Home({navigation}:HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</Text>
          <Button
        title="Ir para Profile"
        onPress={() => navigation.navigate('Profile',{userId:1})} 
      />

    </View>
  )
}

const styles = StyleSheet.create({
        container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:"blue",
        fontSize:18,
        fontWeight:'ultralight'
    }
})