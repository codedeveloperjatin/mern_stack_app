import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {axios.get(url)};
export const createPost = (newPost) => {axios.post(url, newPost)};

// we are exporting a fetchPosts arrow function which gets is the url which leads us to the posts that we have.