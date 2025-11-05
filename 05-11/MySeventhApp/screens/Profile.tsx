import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileScreenProps, StackParamList } from '../interface/NavigationInterfaces'

export default function Profile({navigation,route}:ProfileScreenProps) {



const {userId} = route.params;

  return (
    <View style={styles.container}>
      <Text>Tela de perfil do usuario de id {userId}</Text>


            <Button
        title="Ir para Profile"
        onPress={() => navigation.navigate('Home')} 


      />            <Button
        title="Ir para About"
        onPress={() => navigation.navigate('About')} 
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