import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import HorizontalLine from '../utils/HorizontalLine'


const styles = StyleSheet.create(
    {
        titleSection:{
            fontSize:'11px',
            color:'#4371c4',
            fontFamily: 'Helvetica-Bold'
           
        },
        textSection:{
            fontSize:'9px',
            marginLeft:'8px',
            fontFamily: 'Helvetica'
        }
    }
)

function SummarySection({summary}) {
  return (
    <View>
    <u><Text style={styles.titleSection}>SUMMARY</Text></u>
    <HorizontalLine/>
    <Text style={styles.textSection}>{summary}</Text>
    </View>
  )
}

export default SummarySection