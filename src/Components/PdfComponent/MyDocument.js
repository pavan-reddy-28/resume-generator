import React  from 'react';
import { Document, Page, Text, View,  StyleSheet } from '@react-pdf/renderer';
import SummarySection from './Summary/SummarySection';
import HeaderSection from './Header/HeaderSection';
import Bullet from './utils/Bullet';
import EducationSection from './Education/EducationSection';
import SkillsSection from './Skills/SkillsSection';
import ExperienceSection from './Experience/ExperienceSection';
import { useSelector } from 'react-redux';

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

  
  
});

// Create Document Component


export const MyDocument = ({ userDetails,summary }) => {
  console.log("logger pavan ", userDetails)
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
          <HeaderSection  userDetails={userDetails}/>
          <View style={styles.bodySection}>
            <SummarySection summary={summary}/>
            <EducationSection />
            <SkillsSection/>
           
           <ExperienceSection/>
          </View>
        </View>
      </Page>
    </Document>
  )

};