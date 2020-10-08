import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text  style={textStyle}> Mobile Information Systems - Aufgabe 5  </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#1abc9c',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingTop: 30,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',

    },
});


export default Header;
