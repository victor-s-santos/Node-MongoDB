const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
    storage:multer.memoryStorage(),
    fileFilter:(req, file, next)=>{
        const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
        if(allowed.includes(file.mimetype)){
            next(null, true);
        } else{
            next({message:'Arquivo não suportado!'}, false);
        }

    }
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
    if(!req.file) {
        next();
        return;
    }

    const ext = req.file.mimetype.split('/')[1];
    let filename = `${uuid.v4()}.${ext}`;

    req.body.photo = filename;

    const photo = await jimp.read(req.file.buffer);
    await photo.resize(800, jimp.AUTO);
    await photo.write(`./public/media/${filename}`);
    next();
};





// const multerOptions = {
//     //guardar o arquivo na memoria antes de envia-lo
//     storage:multer.memoryStorage(),
//     fileFilter:(req, file, next)=>{
//         //definindo os mimetypes permitidos
//         const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
//         if(allowed.includes(file.mimetype)){
//             next(null, true);
//         } else{
//             next({message:'Formato do arquivo não permitido!'}, false);
//         }
//     }
// };
// exports.upload = multer(multerOptions).single('photo');
// exports.resize = async (req, res, next) => {
//     //verifica se nesta postagem ja existe uma imagem, se sim, nao faz nada
//     if(!req.file){
//         next();
//         return;
//     }
//     //pega a extensao do arquivo
//     const ext = req.file.mimetype.split('/')[1];
//     let nomedoarquivo = `${uuid.v4()}.${ext}`;
//     req.body.photo = nomedoarquivo;
//     //le o arquivo para memoria e o redimensiona
//     const photo = await jimp.read(req.file.butter);
//     await photo.resize(800, jimp.AUTO);
//     await photo.write(`./public/media/${nomedoarquivo}`);
//     next();
// };