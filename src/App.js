import React, {useState} from 'react';
import {Button, Keyboard, Text, TextInput, View} from 'react-native';
import styles from './assets/styles';
import api from '../src/Services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const focusCep = useState(null);
  const [resultCep, setResultCep] = useState(null); // exibir

  // Dica de estudo: Callback, Promisses e async await

  function handlelimparCampo() {
    setCep('');
    focusCep.current.focus();
    setResultCep(null);
  }

  async function handleBuscaCep() {
    //URL: viacep.com.br/ws/01001000/json/

    if (cep === '') {
      alert('Por favor, digite um CEP válido!');
      setCep('');
      return;
    }

    try {
      const responseApi = await api.get(`/${cep}/json`);
      //   console.warn(responseApi)
      // pegar as informações
      setResultCep(responseApi.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('erro' + error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula sobre Axios</Text>
      <Text style={styles.subtitulo}>Buscar Cep</Text>

      <View style={styles.inputEbotao}>
        <TextInput
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          placeholder="Ex: 74000000"
          placeholderTextColor="#FFF"
          ref={focusCep}
        />
        {/* Botões de buscar e limpar */}
        <View style={styles.containerBotoes}>
          <Button
            title="Buscar"
            onPress={handleBuscaCep}></Button>
        </View>
      </View>

      <View style={styles.botaoLimpar}>
        <Button title="Limpar" color='green' onPress={handlelimparCampo}></Button>
      </View>

      {resultCep && (
        <View styles={styles.container}>
          <Text>CEP: {resultCep.cep}</Text>
          <Text>Logradouro: {resultCep.logradouro}</Text>
          <Text>Bairro: {resultCep.bairro}</Text>
          <Text>
            Cidade/UF: {resultCep.localidade} / {resultCep.uf}
          </Text>
          <Text>DDD: {resultCep.ddd}</Text>
        </View>
      )}
    </View>
  );
}
