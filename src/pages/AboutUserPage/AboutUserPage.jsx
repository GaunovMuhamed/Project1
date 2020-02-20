import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '../../components/Card/Card';
import InformationPanel from '../../components/InfoPanel/InformationPanel';
import TableProjects from '../../components/ProjectsTable/ProjectsTable';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  text: {
    maxWidth: 600,
    maxHeight: 800,
    padding: 5,
    margin: 2,
  },
});

export default function AboutUserPage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container xs={12}>
        <Box m={2}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Card />
            <InformationPanel />
          </Grid>
          <Box mt={15}>
            <TableProjects />
          </Box>
        </Box>
      </Container>
    </>
  );
}
