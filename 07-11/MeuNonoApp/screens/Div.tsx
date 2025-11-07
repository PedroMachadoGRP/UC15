import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { DivBottonProps,} from '../interfaces/NavigationInterfaces';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function Div({ navigation }: DivBottonProps) {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [div,setDiv] = useState<number>(0)

    const divi = ()=> {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2);

        if(number1 == 0 || number2 ==0){
            return alert("Você não pode dividir um número por zero")
        }
        setDiv(number1 / number2);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.text}>Seja bem vindo a Super calculadora</Text>
                    <TextInput style={styles.inputs} placeholder='Digite o primeiro número' onChangeText={setNum1} value={num1} keyboardType='numeric' />
                    <TextInput style={styles.inputs} placeholder='Digite o segundo número' onChangeText={setNum2} value={num2} keyboardType='numeric' />
                    <Button title='Dividir' onPress={() => {divi()}}></Button>
                    <Text style={styles.result}> Resultado da divisão = {div}</Text>
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
        borderColor: "#cfd6ad",
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