import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PersonIcon from '@mui/icons-material/Person';
import UserSummarySection from './SummarySection';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton style={{ height: '60px', width: '60px' , color:'white'}} {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: '0.2s', // Adjust the duration here (e.g., '1s', '2s')
  }),
}));

// Styled Card component with hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius:40,
  transition: 'box-shadow 0.6s ease-in-out', // Adjust the duration here (e.g., '1s', '2s')
  '&:hover': {
    boxShadow: '5px 4px 2px rgba(0, 0, 0, 0.2)', // Change this to the desired hover effect
  },
}));

export default function SummaryCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <CardHeader
      style={{background:'black'}}
        avatar={
          <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
            <SummarizeOutlinedIcon />
          </Avatar>
        }
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={<h3 style={{color:'white'}}>{'Summary Sectiion [ Optional ]'}</h3>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <UserSummarySection handler={handleExpandClick} />
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
