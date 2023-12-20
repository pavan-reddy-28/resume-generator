import React from 'react'
import { Document, Page, Text, View, Link,  StyleSheet , Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    headreSection: {
        color:'black',
        textAlign:'center',
        height:'6%',
       
      },
      userNameSection:{
        fontSize:'24px',
        // fontFamily: 'Calibri',
       
      },
      userInfoSection:{
        fontSize:'10px',
      },
})
function HeaderSection() {
  return (
    <View style={styles.headreSection}>
    <View>
    <Text style={styles.userNameSection} >{"Enter Data"}</Text>
    </View>
     <View style={{display:'flex',flexDirection:'row', marginLeft:'auto',marginRight:'auto'}}>
     <Text style={styles.userInfoSection} >
     Contact: 
     913 913 9999
      | </Text>

      <Text style={styles.userInfoSection} >
     Email: 
     <Link src="mailto:youremail@example.com" style={styles.link}>
        youremail@example.com 
      </Link>
      </Text>
      <Text style={styles.userInfoSection} >
     | LinkedIn: 
     <Link src="https://www.linkedin.com/in/saipavanreddypogula/" style={styles.link}>
     saipavanreddypogula
      </Link>
       </Text>
     </View>
    </View>
  )
}

export default HeaderSection