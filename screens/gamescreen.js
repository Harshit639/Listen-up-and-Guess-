import {View,Text,StyleSheet, Alert, FlatList,Dimensions, useWindowDimensions} from 'react-native'
import NumberContainer from '../components/game/numberContainer';
import Title from '../components/ui/Title';
import {Ionicons} from '@expo/vector-icons';
import {useEffect, useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GameLog from '../components/game/gamelog';

function GenerateRandomNumber(min,max,exclude){
    const randnum = Math.floor(Math.random()*(max-min))+min;
    if(randnum===exclude){
         return GenerateRandomNumber(min,max,exclude);
    }else{
        return randnum;
    }

}

let minbound = 1
let maxbound =  100
function GameScreen({usernumber,onGameOver}){
    const initialGuess = GenerateRandomNumber(1,100,usernumber);
    const [guessNumber,setGuessNumber] = useState(initialGuess);
    const [guuessData, setguesssdata] = useState([initialGuess]);
    const {width,height} = useWindowDimensions();
    // console.log(usernumber);

    useEffect(() => {if (guessNumber===usernumber){
        onGameOver(guuessData.length);
    }},[guessNumber,usernumber,onGameOver]);

    useEffect(() => {
        minbound =1;
        maxbound = 100;
    },[] );

    const lengtharray = guuessData.length;

    function nextguess(direction){
        if((direction==='lower' && guessNumber<usernumber) || (direction==='higher' && guessNumber>usernumber)){
            Alert.alert("Don't Lie","Your direction is wrong!",[{text:'Sorry',style:'cancel'}]);
            return;
        }
        if(direction==='lower'){
            maxbound = guessNumber;
        }else{
            minbound = guessNumber+1;
        }
        const newRnd = GenerateRandomNumber(minbound,maxbound,guessNumber);
        setGuessNumber(newRnd);
        setguesssdata((guuessData) => [newRnd,...guuessData]);

    }
    let content=
    <>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{guessNumber}</NumberContainer>
    <Card>
        <InstructionText style={styles.InstructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttoncontainer}>
            <View style={styles.button}>
            <PrimaryButton onPressed={nextguess.bind(this,'higher')}><Ionicons name='md-add' size={24} color="white"/></PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton onPressed={nextguess.bind(this,'lower')}><Ionicons name='md-remove' size={24} color="white"/></PrimaryButton>
            </View>
        </View>
    </Card>
    </>

    if(width> 500){
        content=
    <>
    
        <View style={styles.buttoncontainerswide}>
            <View style={styles.button}>
            <PrimaryButton onPressed={nextguess.bind(this,'higher')}><Ionicons name='md-add' size={24} color="white"/></PrimaryButton>
            </View>
            <NumberContainer>{guessNumber}</NumberContainer>
            <View style={styles.button}>
            <PrimaryButton onPressed={nextguess.bind(this,'lower')}><Ionicons name='md-remove' size={24} color="white"/></PrimaryButton>
            </View>
        </View>
    
    </>
    }



    return(
    <View style={styles.screen}>
        
        {content}
        <View style={styles.listcontainer}>
        <FlatList
        data={guuessData}
        renderItem={(itemdata) => <GameLog Guess={itemdata.item} roundNumber={lengtharray-itemdata.index}/>}
        keyExtractor={(item) => item}
        />
        </View>

    </View>
    )
}


const devicewidth= Dimensions.get('window').width;

export default GameScreen;

const styles = StyleSheet.create({
   screen:{
    flex:1,
    padding: 40,
    marginTop:40,
    alignItems:'center',
   },
   InstructionText:{
    marginBottom:20,
   },

   buttoncontainer:{
    flexDirection: 'row',
   },
   button:{
    flex:1,
   },
   listcontainer:{
    flex:1,
    marginTop:25,
   },
   buttoncontainerswide:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   }


})

