const path = require('path');
const express = require('express');
const morgan =  require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// // HTTP Logger
// app.use(morgan('combined'))

// Template Engine
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Render home
app.get('/', (req, res) => {
  res.render('home');
})

// Render news
app.get('/news', (req, res) => {
  res.render('news');
})

//render Search
app.get('/search',(req, res) => {
  console.log(req.query.ref);
  res.render('search');
})

//testing
app.get('/noob', (req, res) => {
  res.send('<h1>A new Buffalo!</h1>');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})