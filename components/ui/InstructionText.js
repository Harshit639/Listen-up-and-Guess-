import {StyleSheet,Text} from 'react-native'
import Colors from '../../constants/colors';

function InstructionText({children,style}){
    return(
    <Text style={[styles.enternumber,style]}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    enternumber:{
        fontFamily:'open-sans',
        fontSize:24,
        color:Colors.golden,
    },
})
export  default InstructionText;

