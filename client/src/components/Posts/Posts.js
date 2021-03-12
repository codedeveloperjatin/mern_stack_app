import React from 'react';
import Post from './post/post.js';
import { useSelector } from 'react-redux';
import makeStyles from './styles.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts); 
    const classes = makeStyles();

    console.log(posts)
    return (
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        </>
    )
}

export default Posts;

// this is a parent component of the child component posts.