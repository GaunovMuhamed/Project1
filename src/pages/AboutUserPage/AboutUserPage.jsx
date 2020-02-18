import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import InformationPanel from '../../components/InfoPanel/InformationPanel';
import TableProjects from '../../components/TableProjects/TableProjects';

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
            <Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Avatar"
                  />
                  <CardContent>
                    <Typography gutterBottom vphyariant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles,
                      with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
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
