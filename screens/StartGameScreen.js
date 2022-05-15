import React from "react";
import PrimaryButton from "../components/PrimaryButton";

import { StyleSheet, Text, View, TextInput } from "react-native";

const StartGameScreen = () => {
    return (
        <View  style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <PrimaryButton> Reset </PrimaryButton>
            <PrimaryButton> Confirm </PrimaryButton>
        </View>
    ); 
};

export default StartGameScreen;

const styles = StyleSheet.create({
		inputContainer : {
			// flex : 1 ,
			padding : 16,
			marginTop : 100,
			marginHorizontal : 24,
			borderRadius : 8, 			
			backgroundColor: '#4e0329',
			elevation : 10,
					
		},
		numberInput : {
			height : 50,
			width : 100,
			textAlign: 'center',
			fontSize : 32,
			borderBottomColor : "#ddb52f",
			borderBottomWidth : 2,
			color : "#ddb52f",
			marginVertical : 8,
			fontWeight : 'bold',

		},
});
