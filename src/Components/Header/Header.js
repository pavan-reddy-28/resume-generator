import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';


const AppBarStyled = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: 'black',
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const Header = () =>   
(
    <AppBarStyled position="static">
      <Toolbar>
        <Title align='center' variant="h4">
          {`Resume Generator  `}
        </Title>
      </Toolbar>
    </AppBarStyled>
  );

export default Header;
