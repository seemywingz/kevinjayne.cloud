import React from 'react';
import Styles from './Styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import StickyFooter from './StickyFooter';



const actions = [
  { icon: <FacebookIcon />, name: 'Facebook', href: 'https://www.facebook.com/pseudo.kevin' },
  { icon: <LinkedInIcon />, name: 'Linkedin', href: 'https://www.linkedin.com/in/kevin-jayne/' },
  { icon: <EmailIcon />, name: 'Email', href: 'kevin.jayne@icloud.com' },
];

export const App = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        </Toolbar>
        <StickyFooter
          header="Kevin Jayne"
          body="
          I have a great passion for computer science and information systems. 
          I enjoy the internet of all things! 
          I am experienced both personally and professionally. 
          More importantly, I am an abstract critical thinker and problem solver."
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </Container>
    </AppBar>
  );
};