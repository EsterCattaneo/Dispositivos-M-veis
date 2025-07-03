import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text,Picker, } from 'react-native';

export default function FormGasto({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('despesa'); 

  const handleAdd = () => {
  if (!nome.trim() || !valor.trim()) {
  Alert.alert("Erro", "Descrição e valor são obrigatórios!");
  return;
}


  const valorConvertido = tipo === 'despesa' ? -Math.abs(Number(valor)) : Math.abs(Number(valor));

  onSubmit({
    nome,
    valor: valorConvertido,
    categoria,
    tipo,
    data: new Date().toLocaleDateString(),
  });

  Alert.alert("Cadastrado", "O gasto foi cadastrado com sucesso!"); 

  setNome('');
  setValor('');
  setCategoria('');
  setTipo('despesa');
};

  return (
    <View style={styles.container}>
  <Text style={styles.label}>Tipo</Text>
      <Picker
        selectedValue={tipo}
        onValueChange={setTipo}
        style={styles.input}
      >
        <Picker.Item label="Despesa" value="despesa" />
        <Picker.Item label="Receita" value="receita" />
      </Picker>

      <Text style={styles.label}>Descrição</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />

      <Text style={styles.label}>Valor</Text>
      <TextInput value={valor} onChangeText={setValor} keyboardType="numeric" style={styles.input} />

      <Text style={styles.label}>Mais detalhes</Text>
      <TextInput value={categoria} onChangeText={setCategoria} style={styles.input} />

    
  

      <Button title="Cadastrar" onPress={handleAdd} color="#ff69b4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
    borderRadius: 8,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
