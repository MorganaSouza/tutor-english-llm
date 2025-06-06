import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons'; // Ícone de foguete
import { useNavigation } from '@react-navigation/native';

import Footer from './Footer';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.Image 
        animation="bounceInDown" 
        duration={2000} 
        source={require('./assets/icon.png')} 
        style={styles.icon} 
        resizeMode="contain"
      />
      
      <Animatable.Text animation="fadeIn" delay={500} style={styles.title}>
        🐥 Assistente de Inglês com IA
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={1000} style={styles.text}>
        Desenvolvido por <Text style={styles.highlight}>Morgana Souza</Text> 💚
        {'\n'}Disciplina: <Text style={styles.highlight}>Análise e Projeto de Sistemas</Text>
        {'\n'}Professor: <Text style={styles.highlight}>Geraldo Gomes</Text>
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={1400} style={styles.text}>
        Este app se conecta a uma API de LLM gratuita para responder dúvidas sobre o inglês, com foco no aprendizado prático e divertido!
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={1800} style={styles.subTitle}>
        🛠️ Tecnologias:
      </Animatable.Text>

      <Animatable.View animation="fadeInUp" delay={2000} style={styles.list}>
        <Text style={styles.item}>• React Native (Expo)</Text>
        <Text style={styles.item}>• Node.js (Express)</Text>
        <Text style={styles.item}>• OpenRouter (LLM API)</Text>
        <Text style={styles.item}>• Integração com IA</Text>
      </Animatable.View>

      <Animatable.View animation="zoomInUp" delay={2400}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('App')}>
          <Ionicons name="rocket" size={24} color="#0e0e0e" />
          <Text style={styles.buttonText}> START </Text>
        </TouchableOpacity>
      </Animatable.View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00ffe1',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 14,
  },
  subTitle: {
    fontSize: 18,
    color: '#00ff88',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    marginBottom: 30,
  },
  item: {
    color: '#88ffcc',
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 6,
    textAlign: 'center',
  },
  highlight: {
    color: '#00ff88',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00ffe1',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowColor: '#00ffe1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#0e0e0e',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginLeft: 10,
  },
});
