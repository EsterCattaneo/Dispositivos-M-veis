import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemGasto({ gasto }) {
  const valorEstilo = gasto.valor >= 0 ? styles.valorPositivo : styles.valorNegativo;

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Nome: {gasto.nome}</Text>
      <Text style={valorEstilo}>Valor: R$ {Number(gasto.valor).toFixed(2)}</Text>
      <Text>Categoria: {gasto.categoria}</Text>
      <Text>Tipo: {gasto.tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  nome: {
    fontWeight: 'bold',
  },
  valorPositivo: {
    color: 'green',
  },
  valorNegativo: {
    color: 'red',
  },
});
