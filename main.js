const express = require('express');
const app = express();
const port = 3000;

const session = require('express-session');
const register_create = require('./routes/crud');
const checkLogin = require('./middleware/checkLogin');
const path = require('path');

const checkAuth = require('./utils/checkAuth');


//config engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', './views');


app.use(session({
    secret: 'my_secret_key',
    resave: true,
    saveUninitialized: true,
}));



//Allow users access Public folder 
app.use(express.static(path.join(process.cwd(), 'Public')));

////Allow users access folder Private
//only if user is authenticated 
app.use('/private', checkAuth, express.static(path.join(process.cwd(), 'Private')));


app.use('/', checkLogin);
app.use('/v1', register_create);



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
