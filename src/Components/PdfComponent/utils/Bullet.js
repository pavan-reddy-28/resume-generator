import { Text} from '@react-pdf/renderer';
import React from 'react'

const Bullet = () => (
    <Text style={{width:'2%',}}>{`\u2022`}</Text> // Unicode character for bullet point
  );

export default Bullet
