import React, { useContext } from 'react';
import { View } from 'react-native';
import { GastosContext } from '../context/GastosContext';
import AuxResumoScreen from '../screens/AuxResumoScreen';
import Titulo from '../components/Titulo';

export default function ResumoScreen() {
  const { gastos } = useContext(GastosContext);

  const receitas = gastos.filter(g => Number(g.valor) > 0);
  const despesas = gastos.filter(g => Number(g.valor) < 0);

  const totalReceitas = receitas.reduce((acc, item) => acc + Number(item.valor), 0);
  const totalDespesas = despesas.reduce((acc, item) => acc + Number(item.valor), 0);
  const saldo = totalReceitas + totalDespesas;

  return (
    <View>
      <Titulo texto="Resumo Financeiro" />
      <AuxResumoScreen
        totalReceitas={totalReceitas}
        totalDespesas={totalDespesas}
        saldo={saldo}
      />
    </View>
  );
}
