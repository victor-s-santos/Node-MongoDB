const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.index = async (req, res)=>{
    let response = {
        titulo:'Bem vindo(a)',
        posts:[],
        tags:[]
    };
    const tags = await Post.filtraTags();
    response.tags = tags;

    //console.log(tags);
    const posts = await Post.find();
    response.posts = posts;
    
    res.render('home', response);
}