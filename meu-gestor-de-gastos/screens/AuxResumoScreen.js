import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResumoFinanceiro({ totalReceitas, totalDespesas, saldo }) {
  const saldoEstilo = saldo >= 0 ? styles.positivo : styles.negativo;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Receitas: R$ {totalReceitas.toFixed(2)}</Text>
      <Text style={styles.label}>Despesas: R$ {totalDespesas.toFixed(2)}</Text>
      <Text style={[styles.label, saldoEstilo]}>
        Saldo: R$ {saldo.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  positivo: {
    color: 'green',
    fontWeight: 'bold',
  },
  negativo: {
    color: 'red',
    fontWeight: 'bold',
  },
});
