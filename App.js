/**
 * Calculator Application
 */
import React, { Component } from 'react';
import {View,Text} from 'react-native';
// Import the header for the exercise Aufgabe 6
import Header from "./src/components/Header/Header";
// Import the Style
import styles from './styles';
//Custom Components
import Buttons from './src/components/Buttons'

//constants  - the Buttons this is all the button that should be should shown
let buttons = [
    ['C', 'CE'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '+'],
    ['.', '0', '=','-']
];

// the init to start
let init = '0';

export default class App extends Component {

    /**
     * constructor - INIT
     */
    constructor(props){
        super(props);
        this.state = {sum: init};
        this.triggerCalculate = this.triggerCalculate.bind(this);
    }

    /**
     * RETURN THE SUM TO 0
     */
    initSum = () => {this.setState({sum: init})};

    //Handles actions on button press
    triggerCalculate = (button) => {
        if(!isNaN(button) || button === '.' ){
            if(this.state.sum !== init){
                this.setState({sum: this.state.sum + '' + button + ''})
            }
            else{
                this.setState({sum: button + ''})
            }
        }
        else{
            if(button === buttons[0][0] ) {
                this.initSum();
            }else if (button === buttons[0][1]){
                if (this.state.sum.length === 1){
                    this.initSum();
                }
                else {
                    this.triggerIndex('');
                }
            }else if (button === buttons[4][2]){
                this.triggerMath();
            }else {
                let getParamater = this.state.sum.slice(-1);
                if(isNaN(getParamater)){
                    this.triggerIndex(button)
                }
                else{
                    if(this.state.sum !== init){
                        this.setState({sum: this.state.sum + '' + button + ''})
                    }
                    else{
                        this.setState({sum: button + ''})
                    }
                }
            }
        }
    };

    // for CE
    triggerIndex = (button) => {
        let index = this.state.sum.replace(/.$/,button);
        //change the Index
        this.setState({sum: index})
    };

    //Calculate
    triggerMath = () => {
        if(isNaN(this.state.sum)){
            let $this = this.state.sum;
            //replace / *
            let op = $this.replace(new RegExp(buttons[1][3].replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), '/');
            //replace / *
            op = op.replace(new RegExp(buttons[2][3].replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), '*');

            // result
            this.setState({sum: ''+eval(op)})
        }
    };

    //render
    render() {
        return (
            <View style={styles.container}>
                <Header/>

                <View style={styles.resultContainer}>
                    <Text style={styles.resultTextContainer}>{this.state.sum}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Buttons onClick={this.triggerCalculate} buttons={buttons}/>
                </View>
            </View>
        );
    }
}