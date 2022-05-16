import React from "react";
import PrimaryButton from "../components/PrimaryButton";

import { StyleSheet, Text, View, TextInput } from "react-native";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton> Reset </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton> Confirm </PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#3b021f",
        elevation: 10,
    },
    numberInput: {
        height: 50,
        width: 100,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
	 buttonContainer :  {
		 flex :1,
	 }
});
