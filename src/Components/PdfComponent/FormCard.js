import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import UserHeaderData from './UserHeaderData';
import UserInfoInputSection from '../InputComponents/UserInfo/UserInfoInputSection';
import UserSummarySection from '../InputComponents/Summary/SummarySection';
import SkillsSection from './Skills/SkillsSection';
import UsersSkillsSection from '../InputComponents/Skills/SkillsSection';
import RecipeReviewCard from '../InputComponents/UserInfo/RecipeReviewCard';



export default function FormCard() {
  
  
 

  return (
    <Card  sx={{ maxWidth: '100%',width:'100%',overflow:'auto',height:'140vh',boxShadow:'none' }}>
      <CardHeader
       
       
        title="User Details"
       
      />
    
      <CardContent>
  <RecipeReviewCard/>
     <UserSummarySection/>
     <UsersSkillsSection/>
      </CardContent>
     
     
    </Card>
  );
}
