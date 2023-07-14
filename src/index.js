const path = require('path');
const express = require('express');
const morgan =  require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'))

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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})