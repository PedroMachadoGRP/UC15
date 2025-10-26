import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Info from './Info';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';




export default function Lista() {



    const [tarefas, setTarefas] = useState<any[]>([])
    const [ativo, setAtivo] = useState<boolean>(false);


    const buscarTarefas = async () => {
        try {
            console.log("atualizou");

            const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

            const dados = await resposta.json();


            const complestas = dados.filter((tarefas: any) => !tarefas.completed)


            setTarefas(complestas)
        } catch (error) {
            console.error("Erroa ao buscar tarefa: ", error)
        }

    };

    useEffect(() => {
        buscarTarefas();
    }, []);

    useEffect(() => {
        const atualizar = setInterval(() => {

            if (!ativo) {
                buscarTarefas();
            }
        }, 10000)

        return () => clearInterval(atualizar)

    }, [ativo])



    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulo}>👥 Lista de Usuários</Text>

                {/* FlatList para exibir os dados */}
                <FlatList
                    data={tarefas}
                    keyExtractor={(item) => item.id.toString()} // chave única
                    renderItem={({ item }) => (
                        <Info userId={item.userId} taskName={item.title} isCompleted={item.completed ? 'Completada' : 'false'}></Info>
                    )}
                />

                <Button title={ativo ? 'ligar atualizcao' : "Desligar atualização"} onPress={() => {
                    setAtivo(!ativo); console.log("precionado")
                }}></Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 30 },
    titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    item: { fontSize: 18, marginVertical: 4, color: "black" },
});