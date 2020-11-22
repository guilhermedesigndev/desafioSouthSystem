import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as theme from './styles/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ ...theme.fonts.h1 }}>My Books</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
