//Check if user is authenticated 
function checkAuth(req, res, next) {
    if(req.session.autenticatedUser){
        next();
    }
    else{
        res.redirect('../views/Public/login.ejs');
    }
};

module.exports = checkAuth;