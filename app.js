const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./controllers/error');

app.set('view engine', 'pug');
app.set('views', 'views'); 

app.use(express.urlencoded({ extended: false }));


const mainRoutes = require('./routes/main');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const portfolioRoutes = require('./routes/portfolio');


app.use(mainRoutes);
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);
app.use(portfolioRoutes);

app.use(errorController.get404);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port)
