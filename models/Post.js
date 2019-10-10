const mongoose = require('mongoose');
const slug = require('slug');

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    photo:String,
    title:{
        type:String,
        trim:true,
        required:'Título Obrigatório!'
    },
    slug: String,
    body:{
        type: String,
        trim: true
    },
    tags:[String]
});


postSchema.pre('save', async function(next){
    if(this.isModified('title')){
        this.slug = slug(this.title, {lower:true});
        //aplicando expressao regular para evitar duplicata
        const slugRegex = new RegExp(`^(${this.slug})((-[0-9]{1,}$)?)$`, 'i');

        const postsComSlug = await this.constructor.find({slug:slugRegex})
        
        if(postsComSlug.length > 0) {
            this.slug = `${this.slug}-${postsComSlug.length + 1}`;
        }

    }

    next();
});
module.exports = mongoose.model('Post', postSchema)
