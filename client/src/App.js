import React, { useEffect } from 'react';
import { Container, AppBar,Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { getPost } from './actions/posts';
import memories from './image/memories.png';
import Form from './components/Form/Forms.js';
import Posts from './components/Posts/Posts.js';
import makeStyles from './styles.js';

const App = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch]);

    return (
        <Container maxWidth = 'lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Memories
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item={true} xs={12} sm={7}><Posts /></Grid>
                        <Grid item={true} xs={12} sm={4}><Form /></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
} 

export default App;