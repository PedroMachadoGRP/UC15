import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saudacao from './components/Saudacao';
import SaudacaoNome from './components/SaudacaoNome';
import Botao from './components/Botao';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
    <Saudacao/>
    <SaudacaoNome nome='batata'/>
    <Botao title='Clique aqui' aopressionar={()=> alert('adawdawda')}/>

      <Perfil nome='Pedro' idade={10}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
