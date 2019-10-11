const mongoose = require('mongoose');
const slug = require('slug');

mongoose.Promise = global.Promise;
const ObjectId = mongoose.Schema.Types.ObjectId;

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
    tags:[String],
    author: ObjectId
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

postSchema.statics.filtraTags = function(){
    return this.aggregate([
        {$unwind:'$tags'},
        {$group:{_id:'$tags', counter:{$sum:1}}},
        {$sort:{counter:-1}}
    ]);
}

postSchema.statics.findPosts = function(filters = {}){
    return this.aggregate([
        {$match:filters},
        {$lookup:{
            from:'users',
            let:{'author':'$author'},
            pipeline:[
                {$match:{$expr:{$eq:['$$author', '$_id']}}},
                {$limit:1}
            ],
            as:'author'
        }},
        {$addFields:{
            'author':{$arrayElemAt:['$author', 0]}
        }}
    ]);
}

module.exports = mongoose.model('Post', postSchema)
