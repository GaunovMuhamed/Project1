import React from 'react';
import 'typeface-roboto';
import Box from '@material-ui/core/Box';
import ProfileInfo from './ProfileInfo';
import ProjectsInfo from './ProjectsInfo';
import { Container } from '@material-ui/core';



function UserInformation() {
  return (
    <Box className="UserInformation">
      <Container xs={12}>
         <ProfileInfo />
         <ProjectsInfo />
      </Container> 
    </Box>
  );
}

export default  UserInformation;
