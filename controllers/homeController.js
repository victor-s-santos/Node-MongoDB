const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.index = async (req, res)=>{
    let response = {
        titulo:'Bem vindo(a)',
        posts:[],
        tags:[],
        tag:''
    };
    response.tag = req.query.t;
    const postFilter = (typeof response.tag != 'undefined') ? {tags:response.tag} : {};
    
    const tagsPromise = Post.filtraTags();
    const postsPromise = Post.find(postFilter);

    const result = await Promise.all([tagsPromise, postsPromise]);
    const tags = result[0];
    const posts = result[1];
    
    for(let i in tags){
        if(tags[i]._id == response.tag){
            tags[i].class = "selected";
        }
    }
    response.tags = tags;
    response.posts = posts;
    
    res.render('home', response);
}