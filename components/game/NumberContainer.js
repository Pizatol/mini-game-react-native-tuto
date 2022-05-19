

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utils/colors'

export default function NumberContainer( {children} ) {
  return (
	 <View style={styles.container}>
		<Text style={styles.textNumber}>{ children}</Text>
	 </View>
  )
}

const styles = StyleSheet.create({
	container : {
		borderWidth : 4,
		borderColor : Colors.primaryYellow,
		padding : 24,
		margin : 24,
		borderRadius : 8,
		alignItems : "center",
		justifyContent : "center"
	},
	textNumber : {
		color : Colors.primaryYellow,
		fontSize : 36,
		fontWeight : "bold"
	},
})