import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About({navigation} :any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>

      
    <Button title='Ir para profile' onPress={()=> navigation.goBack('profile')}>
        
    </Button>
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