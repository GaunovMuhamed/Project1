import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import BigImage from '../../resources/images/mainPageImage.jpg';


export default function HomePage() {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      minWidth: '80%',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingBottom: '40rem',
    },
    cardContent: {
      flexGrow: 1,
    },
    bigImageText: {
      position: 'absolute',
      top: '15rem',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#5C6BC0',
    },
  }));

  const cards = [1, 2, 3];

  const classes = useStyles();

  return (

    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <CardMedia
            className={classes.cardMedia}
            image={BigImage}
            title="Image title"
          />
          <Typography className={classes.bigImageText} gutterBottom variant="h1" component="h2">
            Company Text
          </Typography>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
