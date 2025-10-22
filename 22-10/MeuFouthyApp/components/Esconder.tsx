import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Esconder() {
    const [visivel, setVisivel] = useState(false);


  return (
    <View style={styles.container}>
        <Button title = {visivel ? 'Esconder texto' : 'mostrar Texto'}
         onPress={() => setVisivel(!visivel)}/>

        {visivel ? <Text style={styles.text}>Texto Apareceu</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});