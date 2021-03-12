import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
// the const is an instance of the express function, we can now use a lot of methods on that instance.


app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = "mongodb+srv://jatin8887:Change2021@cluster0.i9u2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Sounding on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
