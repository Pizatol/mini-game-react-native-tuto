import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttonText}> {props.children} </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,

        
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
