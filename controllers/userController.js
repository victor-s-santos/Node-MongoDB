const User = require('../models/User');

exports.login = (req, res) => {
    res.render('login');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.signupAction = (req, res) =>{
    const newUser = new User(req.body);
    User.register(newUser, req.body.password, (error)=> {
        if(error){
            req.flash('error', 'Tente novamente mais tarde.')
            res.redirect('/users/signup');
            return;
        }
        req.flash('success', 'Registro realizado com sucesso.')
        res.redirect('/users/login');
    });
};
