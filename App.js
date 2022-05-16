import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <LinearGradient
            colors={["#72063c", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground style={styles.rootScreen} source={require('./assets/background.png')} resizeMode='cover'
            imageStyle={styles.bgImage}
            >
                <StartGameScreen />
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen : {
        flex: 1,
    },
    bgImage : {
      opacity: .15
    },
});
