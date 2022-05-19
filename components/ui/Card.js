import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

export default function Card({children} ) {
  return (
	 <View style={styles.inputContainer}>
		{children}
	 </View>
  )
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		justifyContent : 'center',
		padding: 16,
		marginTop: 50,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary600,
		elevation: 10,
  },
})