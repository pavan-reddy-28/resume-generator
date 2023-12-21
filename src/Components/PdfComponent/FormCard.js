import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import UserHeaderData from './UserHeaderData';
import UserInfoInputSection from '../InputComponents/UserInfo/UserInfoInputSection';
import UserSummarySection from '../InputComponents/Summary/SummarySection';



export default function FormCard() {
  
  
 

  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardHeader
       
       
        title="User Details"
       
      />
    
      <CardContent>
     <UserInfoInputSection/>
     <UserSummarySection/>
      </CardContent>
     
     
    </Card>
  );
}
