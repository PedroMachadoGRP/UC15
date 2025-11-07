import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { HomeBottonProps, SumBottonProps } from '../interfaces/NavigationInterfaces';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function Sum({ navigation }: SumBottonProps) {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [soma, setSoma] = useState<number>(0)

    const sum = () => {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2);

        setSoma(number1 + number2);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.text}>Seja bem vindo a Super calculadora</Text>

                    <TextInput style={styles.inputs} placeholder='Digite o primeiro número' onChangeText={setNum1} value={num1} keyboardType='numeric' />
                    <TextInput style={styles.inputs} placeholder='Digite o segundo número' onChangeText={setNum2} value={num2} keyboardType='numeric' />

                    <Button title='Somar' onPress={() => { sum() }}></Button>
                    <Text style={styles.result}> Resultado da soma = {soma}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        color: "black",
        height: 120,
        width: 240,
        margin: 100,
        gap: 15
    },

    inputs: {
        borderColor: "#2800f0ff",
        borderWidth: 1,
        padding: 12,
        gap: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        color: "black",
        backgroundColor: "#cccccc54",
    },
    text: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    result: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        borderColor: "#cfe7d3",
        borderWidth: 1,
        padding: 12,
        gap: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        color: "black",
        backgroundColor: "#cccccc54"
    }
});