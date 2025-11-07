import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Home';
import { BottomTabParamList } from './interfaces/NavigationInterfaces';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Sum from './screens/Sum';
import Div from './screens/Div';
import Mult from './screens/Multi';
import Sub from './screens/Sub';



const Tab = createBottomTabNavigator<BottomTabParamList>();


export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Soma') iconName = 'add-outline';
                if (route.name === 'Subtração') iconName = 'remove-outline';
                if (route.name === 'Multiplicação') iconName = 'close';
                if (route.name === 'Divisão') iconName = 'ellipsis-vertical-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "purple",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: { height: 60 },
              tabBarLabelStyle: { fontSize: 17 }
            })}
          >

            <Tab.Screen name="Soma" component={Sum} />
            <Tab.Screen name="Subtração" component={Sub} />
            <Tab.Screen name="Multiplicação" component={Mult} />
            <Tab.Screen name="Divisão" component={Div} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </SafeAreaProvider>

  );
}
