import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from './colors';

const Buttont = () => {
    return (
        <TouchableOpacity style={buttonStyles.button}>
            <Text style={buttonStyles.text}>What's the weather?</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: Colors.accent,
        padding: 15,
        borderRadius: 100,
        top: 230,
        left: 0,
        margin: 10,
    },
    text: {
        color: Colors.text,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Buttont;
