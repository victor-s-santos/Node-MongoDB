exports.defaultTituloPagina = "Título da Página Padrão";
exports.menu = [
    {name:'Inicial', slug:'/', guest:true, logged:true},
    {name:'Login', slug:'/users/login', guest:true, logged:false},
    {name:'Cadastro', slug:'/users/signup', guest:true, logged:false},
    {name:'Adicionar Postagem', slug:'/post/add', guest:false, logged:true},
    {name:'Sair', slug:'/users/logout', guest:false, logged:true}
];