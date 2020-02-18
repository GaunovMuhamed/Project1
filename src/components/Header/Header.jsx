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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuOpenSharp from '@material-ui/icons/MenuOpenSharp';
import blue from '@material-ui/core/colors/blue';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomeSharp from '@material-ui/icons/HomeSharp';
import PeopleAltSharp from '@material-ui/icons/PeopleAltSharp';
import WorkSharp from '@material-ui/icons/WorkSharp';
import EqualizerSharp from '@material-ui/icons/EqualizerSharp';


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
    background: fade(blue[50], 0.5),
    width: 'auto',
    position: 'absolute',
    color: blue[500],
    padding: '10px',
    '&:hover': {
      color: blue[600],
    },
  },
  headToolbar: {

  },
}));

export default function Header() {
  const classes = useStyles();

  const [leftToggle, setToggle] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggle(open);
  };

  const sideIcons = [<HomeSharp />, <PeopleAltSharp />, <WorkSharp />, <EqualizerSharp />];

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Homepage', 'Workers', 'Projects', 'Statistics'].map((text, index) => (
          <Link to={`/${text === 'Homepage' ? '' : text.toLowerCase()}`}>
            <ListItem button key={text}>
              <ListItemIcon>{sideIcons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );


  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.header}>
        <Toolbar className={classes.headToolbar}>
          <Drawer open={leftToggle} onClose={toggleDrawer(false)}>
            {sideList()}
          </Drawer>
          <Box display="flex" justifyContent="space-around" m={1} p={1} width="100%">
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
