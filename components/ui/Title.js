import {Text, StyleSheet} from 'react-native'

import Colors from '../../constants/colors';

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize:24,
        color: Colors.golden,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding:12,
        width:300,
        maxWidth:'80%',
    }
})

export default Title;