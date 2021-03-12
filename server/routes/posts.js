import express from 'express';

import { getPosts, createPosts } from '../controller/postRouteHandlers.js';

const postRoutes = express.Router();

postRoutes.get('/', getPosts);
postRoutes.post('/', createPosts);
// what we are doing is, in simple terms , exporting the functionality of the req,res callback function into getposts which is another 
// file in another folder called controllers, we import that call that and use it here, rather than writing all the code in this file.


export default postRoutes;