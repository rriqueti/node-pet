const express = require('express');
const app = express();
const routes = require('./routes/main');
const port = 3000;



//config engine
app.set('view engine', 'ejs');
app.set('views', './views');

// const register_interested = require('./routes/createInterested');
// const checkEmail = require('./routes/checkEmail');


app.use(routes);

// app.use('/', checkEmail);
// app.use('/register', register_interested);



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});