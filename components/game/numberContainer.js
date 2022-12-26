import { View, Text,StyleSheet ,Dimensions} from 'react-native'
import Colors from '../../constants/colors';


function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.NumberContainer} >{children}</Text>
        </View>
    )
}


const devicewidth= Dimensions.get('window').width;
const styles=StyleSheet.create({
    container:{
        margin: devicewidth<380? 12:24,
        borderColor: Colors.golden,
        borderWidth:4,
        padding: devicewidth<380 ? 12:24,
        borderRadius:8,
        justifyContent: 'center',
        alignItems:'center',


    },
    NumberContainer:{
        color: Colors.golden,
        fontSize:28,
        fontWeight: 'bold',

    }
})


export default NumberContainer;