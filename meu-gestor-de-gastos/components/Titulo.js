import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Titulo({ texto }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffc7fc',
    alignItems: 'center',
  },
  texto: {
    color: 'black',
    fontSize: 20,
  },
});
