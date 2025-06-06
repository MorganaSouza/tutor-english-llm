// src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Morgana Souza. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  text: {
    color: '#666', // cinza escuro para combinar com dark mode
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});
