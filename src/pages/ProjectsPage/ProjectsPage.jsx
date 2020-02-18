import React from 'react';
import { Box, Container } from '@material-ui/core';
import ProjectsTable from '../../components/ProjectsTable/ProjectsTable';

export default function ProjectsPage() {
  return (
    <Box>
      <Container xs={6}>
        <ProjectsTable />
      </Container>
    </Box>
  );
}
