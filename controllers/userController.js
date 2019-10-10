exports.login = (req, res) => {
    res.render('login');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.signupAction = (req, res) =>{
    res.json(req.body);
};
