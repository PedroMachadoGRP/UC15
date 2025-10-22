import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Tarefas() {

    const [tarefas, setTarefas] = useState<string[]>([])

    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionaTarefa = () => {
        if (novaTarefa.trim() == "") return

        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput style={styles.input} placeholder='Digite uma terafa' value={novaTarefa} onChangeText={setNovaTarefa} />

                <Button title='Adicionar tarefa' onPress={adicionaTarefa}></Button>

                <FlatList style={styles.tarefa} data={tarefas} keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item, index }) => (
                        <Text style={styles.text}>
                            {index + 1} . {item}
                        </Text>
                    )} />
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    tarefa: {
        fontSize: 18,
        paddingVertical: 5
    }


})