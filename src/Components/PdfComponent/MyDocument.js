import React, { useEffect } from 'react';
import { Document, Page, Text, View, Link, StyleSheet, Font } from '@react-pdf/renderer';
import Helvetica from '../Fonts/Helvetica.ttc';
import HelveticaNeue from "../Fonts/HelveticaNeue.ttc";
import { useSelector } from 'react-redux';
import SummarySection from './Summary/SummarySection';
import HeaderSection from './Header/HeaderSection';
import Bullet from './utils/Bullet';
import EducationSection from './Education/EducationSection';
import SkillsSection from './Skills/SkillsSection';

// Create styles


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',


  },
  mainSection: {
    margin: 10,
    flexGrow: 1,


  },

  bodySection: {
    margin: 2,

    color: 'black',
    fontFamily: 'Helvetica-Bold',
    height: '90%',
  },

  professionalHeaderSection: {
    fontSize: '12px',
    color: '#4371c4',
    fontFamily: 'Helvetica-Bold',
  },
  companyTitle: {
    fontSize: '11px',
    fontFamily: 'Helvetica-Bold',
    marginLeft: '8px',
    width: '84%'
  },
  companyLocation: {
    fontSize: '11px',
    fontFamily: 'Helvetica',
    marginLeft: '8px',
    textAlign:'right',
    width: '16%'
  },
  userRole:{
    fontSize: '11px',
    fontFamily: 'Helvetica',
    marginLeft: '8px',
    width: '74%'
  },
  userExperienceDuration:{
    fontSize: '11px',
    fontFamily: 'Helvetica',
    textAlign:'right',
    width: '26%'
  },
  skillsListTitleSection: {
    fontSize: '10px',
    fontFamily: 'Helvetica',
    marginLeft: '20px',
    width:'100%',
    maxWidth:'550px'
  },
  skillsListDataSection: {
    fontSize: '10px',
    fontFamily: 'Helvetica',
    width:'98%',
  }
  
});

// Create Document Component


export const MyDocument = ({ userData }) => {
  console.log("logger pavan ", userData)
  const [userSkills,setUserSkills]=React.useState({
    "Programming Languages":"Java 8, TypeScript, JavaScript.",
    "Databases": "MongoDB, MySQL, NoSQL, PostgreSQL.",
    "Web Development": `React JS, Spring Boot, Spring Framework, Redux-saga, Redux Toolkit, React Hooks, Redux-thunk,Spring Security, Servlet, Hibernate, HTML5, jQuery, CSS, JSON Web Token, Maven, Express.js, Node.js, J2EE.`,
    "Testing Frameworks": `Jest, Enzyme, Mockito, Mocha.`,
    
    "Tools and Technologies":`Amazon Web Services (AWS), Git version control, Jira, Splunk, Confluence, Postman, S3 Bucket, Swagger, SharePoint, Jenkins, CI/CD Pipeline, VS Code, Eclipse, Notepad++, Linux, MACOSX, Windows.`,
  
  })
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainSection}>
          <HeaderSection />
          <View style={styles.bodySection}>
            <SummarySection />
            <EducationSection />
            <SkillsSection/>
            <View>
            <Text style={styles.professionalHeaderSection}>PROFESSIONAL EXPERIENCE</Text>
            <View style={{ 'display': 'flex', flexDirection: 'column' ,marginTop:'2px'}}>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.companyTitle}><Text>DBS Technology Services India Private Limited</Text></Text>
                  <Text style={styles.companyLocation}>Hyderabad, India</Text>
                </View>

                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.userRole}>Mobile Web Application Developer</Text>
                  <Text style={{...styles.userExperienceDuration}}  >September 2020 - May 2021</Text>
                </View>
                <View style={{ 'display': 'flex', flexDirection: 'row' }}>
                  <Text style={styles.userRole}>Digi-Taiwan</Text>
                 
                </View>
                <View style={{ 'display': 'flex', flexDirection: 'column', marginTop: '2px' }}>
      {
        Object.keys(userSkills).map((obj,index) =>(
          <View  key={index} style={{ 'display': 'flex', flexDirection: 'row', marginTop: '2px',...styles.skillsListTitleSection}} >
        <Bullet/> 
            <Text style={styles.skillsListDataSection}>  {userSkills[obj]} </Text>
      </View>
        ))
      }
    </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )

};