import React from 'react'

import { Document, Page, Text, View,  StyleSheet } from '@react-pdf/renderer';
import Bullet from '../utils/Bullet';
import HorizontalLine from '../utils/HorizontalLine';


const styles = StyleSheet.create({
    heading: {
        fontSize: '11px',
        color: '#4371c4',
        fontFamily: 'Helvetica-Bold',
    
      },
    companyTitle: {
        fontSize: '10px',
        fontFamily: 'Helvetica-Bold',
        marginLeft: '8px',
        width: '80%'
      },
      companyLocation: {
        fontSize: '10px',
        fontFamily: 'Helvetica',
        marginLeft: '8px',
        textAlign:'right',
        width: '20%'
      },
      role:{
        fontSize: '10px',
        fontFamily: 'Helvetica',
        marginLeft: '8px',
        width: '74%'
      },
      experienceDuration:{
        fontSize: '10px',
        fontFamily: 'Helvetica',
        textAlign:'right',
        width: '26%'
      },
      skillsListTitleSection: {
        fontSize: '9px',
        fontFamily: 'Helvetica',
        marginLeft: '20px',
        width:'100%',
        maxWidth:'540px'
      },
      skillsListDataSection: {
        fontSize: '9px',
        fontFamily: 'Helvetica',
        width:'98%',
      }
});

function ExperienceSection() {
    const [userSkills,setUserSkills]=React.useState([
        `Developed diverse data visualization charts using Highcharts React, which assisted in enhancing the user interface for voluntary corporate actions such as dividend choice, rights issues, tender offers, and proxy voting.`,
        "MongoDB, MySQL, NoSQL, PostgreSQL.",
     `React JS, Spring Boot, Spring Framework, Redux-saga, Redux Toolkit, React Hooks, Redux-thunk,Spring Security, Servlet, Hibernate, HTML5, jQuery, CSS, JSON Web Token, Maven, Express.js, Node.js, J2EE.`,
        `Jest, Enzyme, Mockito, Mocha.`,
        
        `Amazon Web Services (AWS), Git version control, Jira, Splunk, Confluence, Postman, S3 Bucket, Swagger, SharePoint, Jenkins, CI/CD Pipeline, VS Code, Eclipse, Notepad++, Linux, MACOSX, Windows.`,
      
    ])
  return (
    <View style={{marginTop:'1px'}} >
    <Text style={styles.heading}>PROFESSIONAL EXPERIENCE</Text>
    <HorizontalLine/>
    <View style={{ 'display': 'flex', flexDirection: 'column' }}>
        <View style={{ 'display': 'flex', flexDirection: 'row' }}>
          <Text style={styles.companyTitle}><Text>{"DBS Technology Services India Private Limited".toLocaleUpperCase()}</Text></Text>
          <Text style={styles.companyLocation}>{"Hyderabad, India".toUpperCase()}</Text>
        </View>

        <View style={{ 'display': 'flex', flexDirection: 'row' }}>
          <Text style={styles.role}>{"Mobile Web Application Developer"}</Text>
          <Text style={{...styles.experienceDuration}}  >September 2020 - May 2021</Text>
        </View>
        <View style={{ 'display': 'flex', flexDirection: 'row' }}>
          <Text style={styles.role}>Digi-Taiwan</Text>
        </View>
        <View style={{ 'display': 'flex', flexDirection: 'column',  }}>
{
(userSkills).map((obj,index) =>(
  <View  key={index} style={{ 'display': 'flex', flexDirection: 'row', marginTop: '2px',...styles.skillsListTitleSection}} >
<Bullet/> 
    <Text style={styles.skillsListDataSection}>  {obj} </Text>
</View>
))
}
</View>
      </View>
      <View style={{ 'display': 'flex', flexDirection: 'column' ,marginTop:'2px'}}>
        <View style={{ 'display': 'flex', flexDirection: 'row' }}>
          <Text style={styles.role}>Digi-Taiwan</Text>
        </View>
        <View style={{ 'display': 'flex', flexDirection: 'column',  }}>
        {
(userSkills).map((obj,index) =>(
  <View  key={index} style={{ 'display': 'flex', flexDirection: 'row', marginTop: '2px',...styles.skillsListTitleSection}} >
<Bullet/> 
    <Text style={styles.skillsListDataSection}>  {obj} </Text>
</View>
))
}
</View>
      </View>
    </View>
  )
}

export default ExperienceSection