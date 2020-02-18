import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  headerStyle: {
    position: 'fixed',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.headerStyle}>
        <Toolbar>
          <Box display="flex" justifyContent="space-around" m={1} p={1} width="100%">
            <Box display="flex">
              <CameraIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Company
              </Typography>
            </Box>

            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button href="http://localhost:3000/">Main</Button>
              <Button href="http://localhost:3000/projects">Projects</Button>
            </ButtonGroup>

            <Button href="http://localhost:3000/signin" variant="contained" color="primary" disableElevation>
              Sign In
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
