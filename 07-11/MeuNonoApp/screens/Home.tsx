import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeBottonProps } from '../interfaces/NavigationInterfaces';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Home({ navigation }: HomeBottonProps) {


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.text}>Seja bem vindo a Super calculadora</Text>
                    <Button title='Ir para profile' onPress={() => navigation.navigate("Soma")}></Button>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "blue",
        fontSize: 18,
        fontWeight: "bold",
    }
});