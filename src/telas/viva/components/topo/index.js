import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import img from '../../../../../assets/viva.jpg'


const width = Dimensions.get('screen').width;

export default function Topo() {
    return <>
    <Image source={img} style={estilo.topo}/>
    </>
}

const estilo = StyleSheet.create({
    topo: {
        width: "100%",
        height: 838 / 835 * width,
        marginTop: 30,
    }
})