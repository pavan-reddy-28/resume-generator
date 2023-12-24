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
import SummaryCard from '../InputComponents/Summary/SummaryCard';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

export default function FormCard() {
  
  
 

  return (
    <Card  sx={{ maxWidth: '100%',width:'100%',overflow:'auto',height:'140vh',boxShadow:'none',background:'transparent' }}>
      <CardHeader
       
       

       
      />
    
      <CardContent>
  <RecipeReviewCard/>
  <br/>
  <SummaryCard/>
     <br/>
     <div>
     <IconButton aria-label="Update" onClick={()=>{}} style={{
            fontSize: '24px',
            color: '#ffeeee',
            background: 'black',
            borderRadius: '30px',
            padding:'16px'
      }}>
      
        Section <AddIcon />
      </IconButton>
     </div>
      </CardContent>
     
     
    </Card>
  );
}
