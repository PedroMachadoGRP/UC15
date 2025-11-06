import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreenProps, HomeScreenPropsBotton, HomeScreenPropsDrawer, HomeScreenPropsTop } from '../interface/NavigationInterfaces';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({ navigation }: HomeScreenPropsTop) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</Text>
        <Button
          title="Ir para Profile"
          onPress={() => navigation.navigate('Profile', { userId: 1 })}
        />

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E0F7FA'
  },
  text: {
    color: "blue",
    fontSize: 18,
    fontWeight: 'ultralight'
  }
})