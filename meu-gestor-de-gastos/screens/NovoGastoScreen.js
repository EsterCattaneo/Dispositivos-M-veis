import React, { useContext } from 'react';
import { View } from 'react-native';
import FormGasto from '../components/FormGasto';
import Titulo from '../components/Titulo';
import { GastosContext } from '../context/GastosContext';

export default function NovoGastoScreen({ navigation }) {
  const { adicionarGasto } = useContext(GastosContext);

  function handleSubmit(gasto) {
    adicionarGasto(gasto);
    navigation.navigate('Detalhes', { gasto });
  }

  return (
    <View>
      <Titulo texto="Novo Gasto" />
      <FormGasto onSubmit={handleSubmit} />
    </View>
  );
}
