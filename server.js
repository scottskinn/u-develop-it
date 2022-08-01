const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// const apiRoutes = require('./controllers/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

// app.use('/api', apiRoutes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});