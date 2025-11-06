import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AboutScreenProps, AboutScreenPropsDrawer, AboutScreenPropsTop } from '../interface/NavigationInterfaces'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function About({navigation} :AboutScreenPropsTop) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>

      
    <Button title='Ir para profile' onPress={()=> navigation.goBack()}>
        
    </Button>
    </View>

    </SafeAreaView>

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