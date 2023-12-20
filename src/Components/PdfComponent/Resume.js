// Resume.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles for the resume
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Create a component for the resume layout
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>John Doe</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
        <Text style={styles.text}>Email: johndoe@example.com</Text>
        <Text style={styles.text}>Phone: +123456789</Text>
        <Text style={styles.text}>Address: 1234 Main St, City, Country</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.text}>
          Experienced software developer with expertise in React, JavaScript, and Node.js. Proficient in
          creating web applications and passionate about learning new technologies.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        <Text style={styles.subtitle}>Software Engineer - ABC Company</Text>
        <Text style={styles.text}>June 2018 - Present</Text>
        <Text style={styles.text}>
          - Developed and maintained web applications using React.js and Node.js.
        </Text>
        <Text style={styles.text}>- Collaborated with the team to design and implement new features.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        <Text style={styles.subtitle}>Bachelor of Science in Computer Science</Text>
        <Text style={styles.text}>University of XYZ, Graduated: May 2018</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
