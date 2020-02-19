import React from 'react';
import HomeSharp from '@material-ui/icons/HomeSharp';
import PeopleAltSharp from '@material-ui/icons/PeopleAltSharp';
import WorkSharp from '@material-ui/icons/WorkSharp';
import EqualizerSharp from '@material-ui/icons/EqualizerSharp';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

const SideMenu = (props) => {
  const { leftToggle, toggleDrawer } = props;
  const classes = useStyles();

  const sideIcons = [<HomeSharp />, <PeopleAltSharp />, <WorkSharp />, <EqualizerSharp />];

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {['Homepage', 'Workers', 'Projects', 'Statistics'].map((text, index) => (
          <Link key={text} to={`/${text === 'Homepage' ? '' : text.toLowerCase}`}>
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
    <Drawer open={leftToggle} onClose={toggleDrawer(false)}>
      {sideList()}
    </Drawer>
  );
};

export default SideMenu;
