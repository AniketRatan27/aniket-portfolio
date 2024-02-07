import express from 'express';

const app = express();

app.listen(8000 ,() => {
    console.log("server Started at port 8000.")
});

//https://api.tvmaze.com/search/shows?q=all