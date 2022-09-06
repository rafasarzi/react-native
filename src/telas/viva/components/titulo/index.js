import React from "react";
import { Text, StyleSheet } from "react-native";


export default function Titulo(){
    return <Text style={estilo.titulo}>Cadastro</Text>
}

const estilo = StyleSheet.create({
    titulo: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 20
  }
})