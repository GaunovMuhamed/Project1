import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuOpenSharp from '@material-ui/icons/MenuOpenSharp';
import blue from '@material-ui/core/colors/blue';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Grid from '@material-ui/core/Grid';
import SideMenu from '../SideMenu/SideMenu';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: '0',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginTop: '4.28rem',
    background: fade(blue[50], 0.7),
    width: 'auto',
    height: '2rem',
    position: 'absolute',
    color: blue[500],
    padding: '10px',
    '&:hover': {
      color: blue[700],
      background: fade(blue[50], 0.5),
    },
  },
  hoveredicon: {
    marginTop: '-6px',
  },
}));

export default function Header(props) {
  const classes = useStyles();


  const [leftToggle, setToggle] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle(open);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.header}>
        <Toolbar className={classes.headToolbar}>
          <SideMenu leftToggle={leftToggle} toggleDrawer={toggleDrawer} />
          <Box display="flex" justifyContent="space-between" m={1} pl={2} pr={2} width="100%">
            <Box display="flex">
              <CameraIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Company
              </Typography>
            </Box>
            <Link to="/signin">
              <Button variant="contained" color="primary" disableElevation>
                Sign In
              </Button>
            </Link>
          </Box>
        </Toolbar>
        <Button onClick={toggleDrawer(true)} className={classes.menuButton}>
          <MenuOpenSharp className={classes.hoveredicon} />
        </Button>
      </AppBar>

    </>
  );
}
