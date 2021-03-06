import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    
    const initialGuess = generateRandomBetween(1, 100, userNumber,
    );

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);


    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie !", "You know that this is wrong...", [
                { text: "Sorry", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess - 1;
            console.log("-");
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );

        setCurrentGuess(newRndNumber);
    };

    return (
        <View style={styles.screen}>
            <Title> Opponent's Guess </Title>
            <NumberContainer> {currentGuess} </NumberContainer>

            
            <Card>

                <InstructionText style={styles.InstructionText}>Higher or lower ?</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, "lower")}
                    >
                        -
                    </PrimaryButton>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, "greater")}
                    >
                        +
                    </PrimaryButton>
                </View>
            </Card>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        marginTop: 20,
    },
    buttonContainer: {
        
        flexDirection: "row",
        justifyContent: "center",
    },
    InstructionText : {
        marginBottom : 12
    },
});
