import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GameOverScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Game Over.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
		  justifyContent : 'center',
		 	alignItems : "center",
   
    },
	 text : {
		 fontSize : 40,
		 fontWeight : "bold",
		 
	 }
});
