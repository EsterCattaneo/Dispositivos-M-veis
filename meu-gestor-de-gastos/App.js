import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NovoGastoScreen from './screens/NovoGastoScreen';
import ResumoScreen from './screens/ResumoScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import PerfilScreen from './screens/PerfilScreen';
import { GastosProvider } from './context/GastosContext';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Resumo() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resumo" component={ResumoScreen} />
    </Stack.Navigator>
  );
}
function NovoGasto() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={NovoGastoScreen} />
    </Stack.Navigator>
  );
}

function Historico() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Historico" component={HistoricoScreen} />
    </Stack.Navigator>
  );
}
function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={PerfilScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GastosProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="AbaNovoGasto" component={NovoGasto} options={{ title: 'NovoGasto' }} />
          <Tab.Screen name="AbaResumo" component={Resumo} options={{ title: 'Resumo' }} />
          <Tab.Screen name="AbaPerfil" component={PerfilStack} options={{ title: 'Perfil' }} />
          <Tab.Screen name="AbaHistórico" component={Historico} options={{ title: 'Historico' }} />

        </Tab.Navigator>
      </NavigationContainer>
    </GastosProvider>
  );
}

