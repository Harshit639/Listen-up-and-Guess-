import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,SafeAreaView } from 'react-native';
import StartGame from './screens/startgame';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react'
import GameScreen from './screens/gamescreen';
import GameOver from './screens/gameover';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() { 

  const [usernumber,setusernumber] = useState();
  const [gameovervar, setgameover] = useState(true);
  const [roundscount, setroundscount] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans' : require('../guess_game/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('../guess_game/assets/fonts/OpenSans-Regular.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  function pickednumberhandler(pickednumber){
    setusernumber(pickednumber);
    setgameover(false);
  }
  function gameoverhandler(rounds){
    setgameover(true);
    setroundscount(rounds)
  }

  function startnewgamehandler(){
    setusernumber(null);
    setroundscount(0);
  }

  let screen = <StartGame onPickNumber={pickednumberhandler}/>
  if(usernumber){
    screen = <GameScreen usernumber={usernumber} onGameOver={gameoverhandler}/>
  }

  if(gameovervar && usernumber){
    screen = <GameOver usernumber={usernumber} noofrounds={roundscount} StartnewGame={startnewgamehandler}/>
  }

  
  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient style={styles.rootscreen} colors={['#4e0329','#ddb52d']}>
    <ImageBackground source={require('./assets/images/background.png')} style={styles.rootscreen} imageStyle={styles.imagstyle}>
      <SafeAreaView style={styles.rootscreen}>{screen}</SafeAreaView>
      
    </ImageBackground>
    
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootscreen:{
    flex:1,
  },
  imagstyle:{
    opacity:0.15,
  }
});
