import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';
import Esconder from './components/Esconder';
import Saudacao from './components/Saudacao';
import ModoEscuroClaro from './components/ModoEscuroClaro';
import Tarefas from './components/Tarefas';

export default function App() {
  return (
    <Tarefas/>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
