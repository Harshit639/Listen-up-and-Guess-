import {View,StyleSheet} from 'react-native'

function Card({children}){
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        padding: 16,
       marginTop:36,
        marginHorizontal:24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation:4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.5,
        alignItems: 'center'

    },
})

export default Card;