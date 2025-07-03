import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import Titulo from '../components/Titulo';

export default function PerfilScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Titulo texto="Perfil do Usuário" />
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <Button title="Salvar" onPress={() => setMostrar(true)} />
      {mostrar && (
        <View style={styles.resultado}>
          <Text>Nome: {nome}</Text>
          <Text>Email: {email}</Text>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  resultado: {
    alignItems: 'center',
    marginTop: 10,
  },
});
