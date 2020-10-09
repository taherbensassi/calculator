import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text  style={textStyle}> Mobile Information Systems - Aufgabe 6  </Text>
        </View>
    );
};

export default Header;
