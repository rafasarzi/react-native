import React from 'react';
import {  TouchableOpacity, Text, StyleSheet } from 'react-native';
import Topo from './src/telas/viva/components/topo';

export default function App() {
  
  return (
    <>

    
    <Topo/>

    <TouchableOpacity style={styles.button} onPress={() => alert('Pressed')}>
      <Text>Touchable Opacity</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Pressed')}
      >
       <Text>Cadastro Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Pressed')}
      >
        <Text>Cadatro Instrutor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Pressed')}
      >
        <Text>Cadatro Turma</Text>
      </TouchableOpacity>
    </>
    

  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#CC9105",
    padding: 10,
    borderRadius: 6,
    marginTop: 30,
    marginHorizontal:20
  }
});
