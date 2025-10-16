import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput,ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Fiji's islands</Text>
      <Image source={{ uri: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/10/07091202/cobia-island-fiji-1-1600x900.jpeg' }} style={{ width: 320, height: 200 }}></Image>

      <Text style={styles.text}>Welcome to Nauro island</Text>
      <Image source={require('./assets/_130339975_gettyimages-1248376666.jpg')} style={{ width: 320, height: 200 }}></Image>

      <TextInput
        
        placeholder="Digite seu nome"
        style={{ borderWidth: 1, padding: 10, width: 200, color:'white' }}
        onChangeText={(texto) => console.log(texto)}
      />

      <Button title='Clique aqui para ver mais' onPress={() => alert('Você ganhou uma viajem só de ida para nauru')}></Button>

      <ScrollView style={{padding:30,margin:20, height:50}}></ScrollView>
    </View>

    
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
    color: '#ffffff'
  },
});
