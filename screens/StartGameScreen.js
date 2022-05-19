import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import { StyleSheet, Text, View, TextInput, Alert } from "react-native";

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resestInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalide number !",
                "Number has to ve a number between 1 and 99",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resestInputHandler,
                    },
                ]
            );
            return;
        }

        onPickNumber(chosenNumber)
    };

    return (
        <View style={styles.rootContainer}>

        <Title >Guess My Number</Title>
        <Card>

        <InstructionText>Choose a number</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={3}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton> Reset </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        {" "}
                        Confirm{" "}
                    </PrimaryButton>
                </View>
            </View>

        

        </Card>
        </View>
    );
}

const styles = StyleSheet.create({

    rootContainer : {
        flex : 1,
        marginTop : 100,        
        alignItems : "center",
    },
    inputContainer: {
        alignItems: "center",
        padding: 16,
        marginTop: 50,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary600,
        elevation: 10,
    },  
    numberInput: {
        height: 50,
        width: 100,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: Colors.primaryYellow,
        borderBottomWidth: 2,
        color: Colors.primaryYellow,
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
