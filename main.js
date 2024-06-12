const express = require('express');
const app = express();
const routes = require('./routes/main');
const port = 3000;

//config engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(routes);

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});