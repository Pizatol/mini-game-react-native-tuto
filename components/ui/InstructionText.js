

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

export default function InstructionText( {children, style} ) {
  return (
	 <View>
		 <Text style={[styles.instructionText, style ]}> {children}</Text>
	 </View>
  )
}

const styles = StyleSheet.create({
	instructionText :{
		color : Colors.primaryYellow,
		fontSize : 24,
  },
})