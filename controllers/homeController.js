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

    const tags = await Post.filtraTags();
    for(let i in tags){
        if(tags[i]._id == response.tag){
            tags[i].class = "selected";
        }
    }
    response.tags = tags;

    //console.log(tags);
    const posts = await Post.find();
    response.posts = posts;
    
    res.render('home', response);
}