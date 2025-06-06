import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity } from 'react-native';

import Footer from './Footer';




export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await fetch('http://192.168.1.64:3000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });
      const data = await res.json();
      setResponse(data.answer || 'Sem resposta');
    } catch (err) {
      setResponse('Erro ao conectar com o servidor');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>🧠 Terminal do Professor de Inglês</Text>
        <Text style={styles.subtitle}>Digite um comando ou uma dúvida linguística abaixo.</Text>
        
        <TextInput
          style={styles.input}
          placeholder="> Qual a diferença entre 'will' e 'going to'?"
          placeholderTextColor="#777"
          value={input}
          onChangeText={setInput}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>EXECUTAR</Text>
        </TouchableOpacity>

        <Text style={styles.responseTitle}>📡 Resposta:</Text>
        <Text style={styles.response}>{response}</Text>
      </View>
      <Footer />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#0e0e0e',
    padding: 24,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffe1',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: '#00ffe1',
    borderWidth: 1,
    backgroundColor: '#1c1c1c',
    color: '#00ff88',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#00ffe1',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0e0e0e',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#aaa',
    fontFamily: 'monospace',
    marginBottom: 6,
  },
  response: {
    fontSize: 15,
    color: '#33ff77',
    backgroundColor: '#1c1c1c',
    padding: 12,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
});
