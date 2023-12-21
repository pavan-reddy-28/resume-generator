import React from 'react'
import { Document, Page, Text, View, Link,  StyleSheet , Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    headreSection: {
        color:'black',
        textAlign:'center',
        height:'4%',
      },
      userNameSection:{
        fontSize:'20px',
        // fontFamily: 'Calibri',
       
      },
      userInfoSection:{
        fontSize:'9px',
      },
})
function HeaderSection({userDetails}) {
  return (
    <View style={styles.headreSection}>
    <View>
    <Text style={styles.userNameSection} >{userDetails.name}</Text>
    </View>
     <View style={{display:'flex',flexDirection:'row', marginLeft:'auto',marginRight:'auto'}}>
     <Text style={styles.userInfoSection} >
     Contact: 
     {userDetails.contact}
      | </Text>

      <Text style={styles.userInfoSection} >
     Email:  
     <Link src={`mailto:${userDetails.email}`}  style={{...styles.link,textDecoration:'none'}}>
        {userDetails.email}
      </Link>
      </Text>
      <Text style={styles.userInfoSection} >
     | LinkedIn:  
     <Link src={userDetails.linkedInURL} style={{...styles.link,textDecoration:'none'}}>
     {userDetails.displayText}
      </Link>
       </Text>
     </View>
    </View>
  )
}

export default HeaderSection