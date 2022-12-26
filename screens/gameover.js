import {Image, StyleSheet, Text,View,Dimensions,useWindowDimensions, ScrollView} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


function GameOver({usernumber,noofrounds,StartnewGame}){


    const {width,height} = useWindowDimensions();

    let imageStyle= 300;

    if(width<380 ){
        imageStyle=150
    }

    if(height<500){
        imageStyle=100

    }

    const extra = {
        width: imageStyle,
        height: imageStyle,
        borderRadius: imageStyle/2,
    }
    return (
        <ScrollView style={styles.screen}>
        <View style={styles.onscreen}>
            <Title>Game Over</Title>
            <View style={[styles.imagecontainer, extra]}>
            <Image source={require('../assets/images/success.png')} style={styles.imagre}/>
            </View>
            <Text style={styles.summarytext}>Your Phone needed <Text style={styles.innnertext}>{noofrounds}</Text> rounds to guess number <Text style={styles.innnertext}>{usernumber}</Text>.</Text>
  
            <View style={styles.button}>
            <PrimaryButton onPressed={StartnewGame} style={styles.buttontext}>Play Again!</PrimaryButton>
            </View>
        </View>
        </ScrollView>

    )
}

const devicewidth = Dimensions.get('window').width;
 const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    onscreen:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imagecontainer:{
        borderWidth:3,
        overflow:'hidden',
        margin:36,
        
    },
    imagre:{
        width: '100%',
        height: '100%',
    },

    button:{
        width:'50%',
        
    },

    buttontext:{
        padding:4,
    
    },
    
    summarytext:{
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center',
        marginVertical:24,
    },
    innnertext:{
        color: '#4e0329',
        fontWeight:'bold',
      
    },
 

 })

export default GameOver;
