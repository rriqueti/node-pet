const checkEmail = require('./routes/checkEmail');
const register_interested = require('./routes/InterestedRoutes/createInterested');
const express = require('express');
// const bodyParser = require('body-parser')
const crud = require('./routes/crud');
const app = express();
const port = 3000;

// const session = require('cookie-session');


app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/crud', crud);
app.use('/', checkEmail);
app.use('/register', register_interested);



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});