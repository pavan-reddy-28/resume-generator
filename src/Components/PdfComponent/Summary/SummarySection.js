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

function SummarySection() {
  return (
    <View>
    <u><Text style={styles.titleSection}>SUMMARY</Text></u>
    <HorizontalLine/>
    <Text style={styles.textSection}>{'Professional with nearly 3 years of experience in Full Stack web development with excellent knowledge of Spring Boot, React JS, and Amazon Web Services. Optimized websites and developed microservices with resilient UI components, and Micro Frontend Libraries (MFEs) for global banking systems. '}</Text>
    </View>
  )
}

export default SummarySection