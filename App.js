import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./utils/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(true)

  


    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameOver(false)
    };
    const gameOverHandler = () => {
        setGameOver(true)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if(gameOver && userNumber) {
        screen = <GameOverScreen />
    }

    

    return (
        <LinearGradient
            colors={[Colors.primary500, Colors.primaryYellow]}
            style={styles.rootScreen}
        >
            <ImageBackground
                style={styles.rootScreen}
                source={require("./assets/background.png")}
                resizeMode="cover"
                imageStyle={styles.bgImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    bgImage: {
        opacity: 0.15,
    },
});
