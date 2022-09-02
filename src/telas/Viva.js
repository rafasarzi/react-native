import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import topo from '../../assets/viva.jpg'


const width = Dimensions.get('screen').width;

export default function Viva() {
    return <>
    <Image source={topo} style={estilo.topo}/>
    </>
}

const estilo = StyleSheet.create({
    topo: {
        width: "100%",
        height: 838 / 835* width,
    }
})