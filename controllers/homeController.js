/*
exports.userMiddleware = (req, res, next) => {
    let info = {name:'Victor', id:01};
    req.userInfo = info;
    next();
};
*/
exports.index = (req, res)=>{
    let itens = {
        'nome': req.query.nome,
        'idade': req.query.idade,
        'mostrar': true,
        userInfo: req.userInfo,
        lp:[
            {linguagem:'python', framework:'django'},
            {linguagem:'javascript', framework:'vuejs'},
            {linguagem:'php', framework:'Laravel'},
            {linguagem:'javascript', framework:'react'},
            {linguagem:'ruby', framework:'on rails'},
            {linguagem:'python', framework:'flask'}
        ],
        aprender:['machine learning', 'deep learning', 
                'tensorflow', 'keras',
                'pytorch', 'pandas'],
        hello:'<h1>Olá estranho!</h1>',
        titulo: 'Título da Página^^'

    };
    res.render('home', itens);
}