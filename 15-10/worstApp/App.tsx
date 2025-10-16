import React from 'react'
import { ScrollView, StyleSheet, View, Text, TextInput, Button, Image } from 'react-native'


export default function App() {
    return (


        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.header}>
                Bem Vindo ao Meu App
            </Text>

            <Image source={{ uri: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/04/pol-pot-smiling.jpg' }} style={styles.image} />

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input} placeholder='Digite nome'></TextInput>

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder='Digite seu Email' keyboardType='email-address'></TextInput>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title='Enviar'
                    onPress={() => alert("Formulario enviado!")} color={'#4A90E2'}>

                </Button>
            </View>

            <Text style={styles.footer}>
                @ 2025 Meu App. Todos os direitos reservados.
            </Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#333',
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    form: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 10,
    },
    footer: {
        marginTop: 40,
        color: '#888',
    },
})
