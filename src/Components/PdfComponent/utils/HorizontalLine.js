import React from 'react'
import { Document, Page, Text, View,  StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    separator: {
        borderBottom: 1,
        borderColor: 'black',
        marginVertical:2,
      },
});

function HorizontalLine() {
  return (
    <View style={styles.separator} />
  )
}

export default HorizontalLine