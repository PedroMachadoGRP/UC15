import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App2() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Junte-se ao khmer vermelho</Text>
        <Image source={require('./assets/pol-pot.jpg')}
          style={{ width: 200, height: 250 }}
        ></Image>
        <Button title='Juntar-se' onPress={() => alert('Bem vindo a marcha vermelha')} color={'#880808'}></Button>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  text: {
    color: "#ffffff",
    fontSize: 25,
  }
});
