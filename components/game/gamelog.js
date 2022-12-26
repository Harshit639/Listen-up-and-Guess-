import { StyleSheet, Text,View } from 'react-native'
import Colors from '../../constants/colors';


function GameLog({roundNumber,Guess}){
    return(
        <View style={styles.listitem}>
            <Text style={styles.textitem}>#{roundNumber}</Text>
            <Text style={styles.textitem}>Opponent's Guess: {Guess}</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listitem:{
        borderColor: '#3b021f',
        borderWidth:1,
        borderRadius:40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.golden,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        elevation:4,
        shadowOpacity:0.25,
        shadowColor: 'black',
        shadowRadius:3,
        
    },

    textitem:{
        fontFamily:'open-sans',
    }
})

export default GameLog;