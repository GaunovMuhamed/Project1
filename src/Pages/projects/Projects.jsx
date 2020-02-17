import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

  mainContainer: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#4DB6AC',
  },

  projectElement: {

  },
}));

export default function SignAndRegister() {
  const classes = useStyles();

  const elements = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <CssBaseline />
      <Container className={classes.mainContainer} component="main" maxWidth="lg">
        <Box className={classes.paper}>
          {elements.map((item) => (
            <Box>
              <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}
