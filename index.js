const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home',{})
});
app.get('/movies', (req, res) => {
    res.send('A list of movies')
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