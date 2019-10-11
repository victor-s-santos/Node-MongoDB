module.exports.isLogged = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'Você precisa estar logado para acessar esta página.')
        req.redirect('/users/login');
        return;
    }
    next();

};