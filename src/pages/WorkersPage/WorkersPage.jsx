import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card/Card';

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: 600,
    maxHeight: 800,
    padding: 5,
    margin: 2,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  workersMainHolder: {
    maxWidth: '100%',
    padding: '24px',
  },
  gridHolder: {
    maxWidth: '90%',
  },
  upperPanel: {
    paddingTop: '1rem',
    maxWidth: 'max-content',
    boxShadow: '0 0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0',
    marginBottom: '0',
    background: '#ffffff',
  },
}));

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function SideMenu() {
  const classes = useStyles();

  const developers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const interns = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const sales = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const hr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [workers, setWorkers] = useState({
    developers, interns, sales, hr,
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
      <CssBaseline />
      <Container className={classes.workersMainHolder}>
        <Paper>
          <Container className={classes.gridHolder}>
            <AppBar className={classes.upperPanel} position="static" color="default">
              <Tabs
                // centered
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="developers" disableRipple {...a11yProps(0)} />
                <Tab label="interns" disableRipple {...a11yProps(1)} />
                <Tab label="sales" disableRipple {...a11yProps(2)} />
                <Tab label="hr" disableRipple {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Grid container spacing={4}>
                {workers.developers.map((item) => (
                  <Grid item md={3}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={4}>
                {workers.interns.map((item) => (
                  <Grid item md={3}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={4}>
                {workers.sales.map((item) => (
                  <Grid item md={3}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container spacing={4}>
                {workers.hr.map((item) => (
                  <Grid item md={3}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Container>
        </Paper>
      </Container>
    </>
  );
}
