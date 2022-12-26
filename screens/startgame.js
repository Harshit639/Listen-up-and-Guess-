import {View,StyleSheet, TextInput, Alert,Text, useWindowDimensions , KeyboardAvoidingView,ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import { useState } from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGame({onPickNumber}){
    const [enterednumber, setenterednumber] = useState('');

    const {width,height} = useWindowDimensions();

    function textchangehandler(enteredtext){
        setenterednumber(enteredtext);
    }

    function resetinputHandler(){
        setenterednumber('');
    }

    function confirmInputHandler(){
        console.log(enterednumber)
        const confirmedText = parseInt(enterednumber);

        if( isNaN(confirmedText) || confirmedText<=0 || confirmedText>99  ){
            console.log(confirmedText); 
            Alert.alert('Invalid Number',
            'Number should be between 0 and 99',
            [{text:'Okay', style:'Destructive', onPress: resetinputHandler}]
            );
            return;
        }
        onPickNumber(confirmedText);
    }

    const Margintop = height<450 ? 50 :100;


    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootscreen, {marginTop:Margintop}]}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter your Number</InstructionText>
            <TextInput style={styles.numberinput}
             maxLength={2}
              keyboardType="number-pad" 
              onChangeText={textchangehandler}
              value={enterednumber} />
            <View style={styles.buttoncontainer}>
            <View style={styles.button}>
            <PrimaryButton onPressed={resetinputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )

}

export default StartGame;

const styles =  StyleSheet.create({

    screen:{
        flex:1,
    },
    rootscreen:{
        flex:1,
        // marginTop:100,
        alignItems: 'center',
    },

    enternumber:{
        fontFamily: 'open-sans-bold',
        fontSize:24,
        color:Colors.golden,
    },
    numberinput:{
        textAlign: 'center',
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth:2,
        fontSize: 32,
        color:  '#ddb52f',
        fontWeight: 'bold',
        marginVertical: 20,

    },
    buttoncontainer:{
        flexDirection: 'row',
    },
    button:{
        flex:1,
    }
})