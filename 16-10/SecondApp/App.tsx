import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
    return (


        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <Image source={require('./assets/Flag_of_Cambodia.svg.png')} style={styles.img}></Image>
                <Text style={styles.text}>Junte-se a nova revolução</Text>

                <View style={styles.viewContainer}>
                    <TextInput placeholder='Digite seu nome' style={styles.input}></TextInput>
                    <TextInput placeholder='Digite seu Email' style={styles.input}></TextInput>


                    <View style={{ width: 235,marginBottom:15 }}>
                        <Button title='Juntar-se' color='#00008B'  onPress={() => alert('Bem vindo a nova era')}></Button>
                    </View>

                </View>


            </SafeAreaView>
        </SafeAreaProvider>

    )


}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 200
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    viewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#880808'
    },
    input: {
        borderWidth: 1,
        borderColor: '#A9A9A9',
        padding: 15,
        width: 235,
        color: '#89CFF0',
        backgroundColor: '#E1D9D1',
        borderRadius: 10
    }
})

