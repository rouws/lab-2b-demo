const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

const movies = [
  {title: "the hulk", genre: "Action", jaartal: 1980},
  {title: "The shawshank redemption", genre: "Drama", jaartal: 1990},
  {title: "Spidermn", genre: "Comedy", jaartal: 2020}
]

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home',{})
});

app.get('/movies', (req, res) => {
    res.render('listOfMovies', {title: "Lijst van films", movies})
})

app.get('/movies/:movieId', (req, res) => {
    res.send(`<h1>Detailpage of movie ${req.params.movieId} </h1>`)
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});