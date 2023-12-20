import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import UserHeaderData from './UserHeaderData';



export default function FormCard() {
  
  
 

  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardHeader
       
       
        title="Enter Data"
       
      />
    
      <CardContent>
     <UserHeaderData/>
      </CardContent>
     
     
    </Card>
  );
}
