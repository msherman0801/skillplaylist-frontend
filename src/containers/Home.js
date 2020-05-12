import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';


function Home() {

        const useStyles = makeStyles((theme) => ({
            container: {
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridGap: theme.spacing(3),
            },
            paper: {
              padding: theme.spacing(1),
              textAlign: 'center',
              color: theme.palette.text.secondary,
              whiteSpace: 'nowrap',
              marginBottom: theme.spacing(1),
            },
            divider: {
              margin: theme.spacing(2, 0),
            },
          }));
          const classes = useStyles();
          
        return (
            <div>
                <Box>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justify="center" align-items="center">
                            <Grid item xs={12} md={8} >
                                <Paper className={classes.paper} >xs=3<br />dasd</Paper>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper className={classes.paper} >xs=3</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} >xs=3</Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </div>
        )
    }


export default Home;