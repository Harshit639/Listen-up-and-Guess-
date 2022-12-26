import {Text,View,StyleSheet, Pressable} from 'react-native'


function PrimaryButton({children,onPressed,style}){
    return(
    <View style={[styles.outercontainer,style]}>
    <Pressable android_ripple={{color:'#640233'}} style={({pressed}) => pressed ? [styles.innercontainer,styles.pressed]: styles.innercontainer } onPress={onPressed}>
        <Text style={styles.buttontext}>{children}</Text>
    </Pressable>
    </View>
    )

}
export default PrimaryButton;

const styles = StyleSheet.create({
    outercontainer:{
        backgroundColor:'#72063c',
        margin:4,
        borderRadius:28,
        overflow:'hidden',
    },
    innercontainer:{
        paddingVertical:8,
        paddingHorizontal: 16,
        elevation:2,
    },
    buttontext:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        color: 'white',
        textAlign: 'center',
    },
    pressed:{
        opacity: 0.75,
    }
})