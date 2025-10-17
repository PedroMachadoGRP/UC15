import React from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
    return (


        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <Image source={require('./assets/Flag_of_Cambodia.svg.png')} style={styles.img}></Image>


            
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Junte-se a nova revolução</Text>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    viewContainer: {
        backgroundColor:'#f8f8f8ff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        padding: 20,
        borderRadius:15,
        width:320,
        height:260
    },
    text: {
        fontSize: 20,
        color: '#8CBED6'
    },
    input: {
        borderWidth: 1,
        borderColor: '#89CFF0',
        padding: 15,
        width: 235,
        color: '#454545',
        backgroundColor: '#F5F5F5',
        borderRadius: 10
    }
})

