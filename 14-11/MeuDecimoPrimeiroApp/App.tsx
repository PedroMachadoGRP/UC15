import { StyleSheet, Text, View, TextInput, Alert, Platform, FlatList, TouchableOpacity } from 'react-native';
import * as Notifications from "expo-notifications";
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Lembrete = {
  id: string,
  mensagem: string,
  segundos: number
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {

  const [novaMensagem, setMensagem] = useState<string>("");
  const [novosSegundos, setSegundos] = useState<string>("");
  const [lembrete, setLembretes] = useState<Lembrete[]>([]);

  async function pedirPermissao() {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      const { status: novoStatus } = await Notifications.requestPermissionsAsync();

      if (novoStatus !== "granted") {
        Alert.alert("Permissão negada, o aplicativo não podera enviar notificações");
        return;
      }
    }

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        sound: "default",
      })
    }
  }

  useEffect(() => {
    pedirPermissao()
  }, []);

  async function agendarLembrete() {
    if(!novaMensagem.trim()){
      Alert.alert("Mensagem pro BURRO","Seu burro tem que botar uma mensagem")
      return;
    }
    if(!novosSegundos.trim()){
      Alert.alert("Mensagem pro BURRO","Seu burro tem que botar uma tempo para o timer você não sabe usar um timer?")
      return;
    }

    setLembretes([...lembrete, { id: (lembrete.length + 1).toString(), mensagem: novaMensagem, segundos: Number(novosSegundos) }]);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nova mensagem",
        body: novaMensagem,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: Number(novosSegundos),
      },
    });
  }

  async function cancelarTodos() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setLembretes([]);
    Alert.alert("Cancelado", "Todos os lembretes foram removidos.");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Melhor lembrador</Text>
        <TextInput
          placeholder='Digite sua nova notificação'
          placeholderTextColor="#999"
          style={styles.input}
          value={novaMensagem}
          onChangeText={setMensagem}
        />

        <TextInput
          placeholder='Digite o tempo para notificação'
          placeholderTextColor="#999"
          style={styles.input}
          value={novosSegundos}
          onChangeText={setSegundos}
          keyboardType='numeric'
        />

        <FlatList
          data={lembrete}
          keyExtractor={(lembrete) => lembrete.id}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <Text style={styles.item}>{item.mensagem}</Text>
              <Text style={{ color: "#BB86FC", marginTop: 4 }}>
                {item.segundos}s
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => (
            <TouchableOpacity style={styles.buttonPrimary} onPress={agendarLembrete}>
              <Text style={styles.buttonPrimaryText}>Adicionar nova notificação</Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.buttonDanger} onPress={cancelarTodos}>
          <Text style={styles.buttonDangerText}>Cancelar notificações</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#121212",
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6A0DAD",
    marginBottom: 10,
  },

  item: {
    fontSize: 18,
    color: "#fff",
  },

  separator: {
    height: 1,
    backgroundColor: "#6A0DAD",
    opacity: 0.3,
    marginVertical: 8,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#BB86FC",
    marginBottom: 10,
    textAlign: "center",
  },

  listContainer: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonPrimary: {
    backgroundColor: "#6A0DAD",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonPrimaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonDanger: {
    backgroundColor: "#B00020",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonDangerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
