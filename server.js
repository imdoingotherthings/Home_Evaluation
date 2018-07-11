const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});