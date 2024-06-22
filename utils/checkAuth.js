//Check if user is authenticated 
function checkAuth(req, res, next) {
    if (req.session.autenticatedUser) {
        next();
    } else {
        res.status(401).send('caiu a sessão <a href="/"> Tela de login </a>');
    }
};

module.exports = checkAuth;