import React from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        maxWidth: 600,
        maxHeight: 800,
        padding: 5,
        margin: 2
    }
})

function InformationRightPanel() {
    const classes = useStyles();
    return (
        <div>
            <Box>
        <Paper>
        <Box className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis? Odio facilis reprehenderit porro temporibus, deleniti magnam doloremque, incidunt ipsum ut culpa beatae esse architecto exercitationem similique, debitis reiciendis fugiat!</Box>
        <Divider />
        <Box className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis? Odio facilis reprehenderit porro temporibus, deleniti magnam doloremque, incidunt ipsum ut culpa beatae esse architecto exercitationem similique, debitis reiciendis fugiat!</Box>
        <Divider />
        <Box className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis? Odio facilis reprehenderit porro temporibus, deleniti magnam doloremque, incidunt ipsum ut culpa beatae esse architecto exercitationem similique, debitis reiciendis fugiat!</Box>
         <Divider />
        <Box className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis? Odio facilis reprehenderit porro temporibus, deleniti magnam doloremque, incidunt ipsum ut culpa beatae esse architecto exercitationem similique, debitis reiciendis fugiat!</Box>
        <Divider />
       <Box className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis? Odio facilis reprehenderit porro temporibus, deleniti magnam doloremque, incidunt ipsum ut culpa beatae esse architecto exercitationem similique, debitis reiciendis fugiat!</Box>
        </Paper>
        </Box>
        </div>
    )
}

export default InformationRightPanel
