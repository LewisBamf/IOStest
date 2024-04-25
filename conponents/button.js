import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from './colors';
import { Dimensions } from 'react-native';
import home from '../assets/home.svg';
import gear from '../assets/gear.svg';
import hazard from '../assets/hazard.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const thickness = windowHeight * 0.05

const Buttont = () => {
    return (
        <TouchableOpacity style={buttonStyles.button}>
            <Text style={buttonStyles.text}>What's the weather?</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: Colors.accent,
        paddingVertical: thickness,
        paddingHorizontal: windowWidth/2,
        borderRadius: 0,
        bottom: 0,
        left: 0,
        margin: 0,
    },
    text: {
        color: Colors.text,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Buttont;
