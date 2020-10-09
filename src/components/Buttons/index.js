//React Modules
import React, { Component } from 'react';
import {View, Text, Platform, TouchableHighlight} from 'react-native';

//Styles
import styles from './styles';

export default class Buttons extends Component {

    // Change the color of the buttons
    handleColors(button){
        //console.log(button);
        if(
            (button === 'x') ||
            (button === '+') ||
            (button === '-') ||
            (button === '÷') ||
            (button === '=') ||
            (button === 'C') ||
            (button === 'CE')
        )
            return <Text style={styles.mathColor}>{button}</Text>;
        else
            return <Text style={styles.numbersButton}>{button}</Text>;
    }

    // Event on click
    handleClickButtons = (button) => {
        requestAnimationFrame(() => {
            this.props.onClick(button);
        });
    };

    // Define the buttons
    handleButtons(row,index){
       return (
        <View key={index} style={styles.rowButton}>
            {
                row.map((col,index) => (
                    <TouchableHighlight
                        style={styles.rowButton}
                        key={index}
                        onPress={() => this.handleClickButtons(col)}>
                        <View style={styles.borderButton}>
                            { this.handleColors(col) }
                        </View>
                    </TouchableHighlight>
                ))
            }
        </View>
       )
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.buttons.map((row, index) => (
                         this.handleButtons(row,index)
                    ))
                }
            </View>
        );
    }
}