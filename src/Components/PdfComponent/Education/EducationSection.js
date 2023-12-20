import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Bullet from '../utils/Bullet';


const styles = StyleSheet.create({
    educationHeaderSection: {
        fontSize: '12px',
        color: '#4371c4',
        fontFamily: 'Helvetica-Bold',
        
      },
      univNameSection: {
        fontSize: '10px',
        fontFamily: 'Helvetica-Bold',
       
        marginLeft: '8px',
        width: '75%'
      },
      univDuriationSection: {
        fontSize: '10px',
        
        width: '25%',
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        textAlign:'right'
      },
      univMajorSection: {
        fontSize: '10px',
        fontFamily: 'Helvetica',
        marginLeft: '20px',
        width: '100%'
    
      },
})


function EducationSection() {
  return (
    <View>
              <Text style={styles.educationHeaderSection}>EDUCATION</Text>
              <View style={{ 'display': 'flex', flexDirection: 'column' ,marginTop:'2px'}}>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.univNameSection}> <Text > University Of Central Missouri , Warrensburg missouri</Text></Text>
                  <Text style={styles.univDuriationSection}>August 2022 - December 2023</Text>
                </View>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.univMajorSection}><Bullet /> <Text > Masters in Computer Science</Text></Text>
                </View>
              </View>
              <View style={{ 'display': 'flex', flexDirection: 'column' ,marginTop:'2px'}}>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.univNameSection}> <Text > University Of Central Missouri , Warrensburg missouri</Text></Text>
                  <Text style={styles.univDuriationSection}>August 2022 - December 2023</Text>
                </View>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.univMajorSection}><Bullet /> <Text > Masters in Computer Science</Text></Text>
                </View>
              </View>
            </View>
  )
}

export default EducationSection