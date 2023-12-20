import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'
import Bullet from '../utils/Bullet'
const styles = StyleSheet.create({
    skillsTitleSection: {
        fontSize: '12px',
        color: '#4371c4',
        fontFamily: 'Helvetica-Bold',
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
        wordBreak: 'break-word',
        width:'98%',
      }
})
function SkillsSection() {
    const [userSkills,setUserSkills]=React.useState({
        "Programming Languages":"Java 8, TypeScript, JavaScript.",
        "Databases": "MongoDB, MySQL, NoSQL, PostgreSQL.",
        "Web Development": `React JS, Spring Boot, Spring Framework, Redux-saga, Redux Toolkit, React Hooks, Redux-thunk,
        Spring Security, Servlet, Hibernate, HTML5, jQuery, CSS, JSON Web Token, Maven, Express.js, Node.js, J2EE.`,
        "Testing Frameworks": `Jest, Enzyme, Mockito, Mocha.`,
        "Testing ": `Jest, Enzyme, Mockito, Mocha.`,
        "Tools and Technologies":`Amazon Web Services (AWS), Git version control, Jira, Splunk, Confluence, Postman, S3
        Bucket, Swagger, SharePoint, Jenkins, CI/CD Pipeline, VS Code, Eclipse, Notepad++, Linux, MACOSX, Windows.`,
      
      })
  return (
    <View >
    <Text style={styles.skillsTitleSection}>
      SKILLS
    </Text>
    <View style={{ 'display': 'flex', flexDirection: 'column', marginTop: '2px' }}>
      {
        Object.keys(userSkills).map((obj,index) =>(
          <View  key={index} style={{ 'display': 'flex', flexDirection: 'row', marginTop: '2px' ,...styles.skillsListTitleSection}} >
        
          <Bullet /> 
          <Text style={{fontFamily: 'Helvetica-Bold'}}> {obj} : 
            <Text style={styles.skillsListDataSection}>  {userSkills[obj]} </Text>
          </Text>
        
      </View>
        ))
      }
    </View>
  </View>
  )
}

export default SkillsSection