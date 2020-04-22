const Produto = require('../Model/Produto')

module.exports = {
    async create (request, response){
        const { name, type, price, rarity, description, region, spawnTimes, image, size  } = request.body
        
        let produto = await Produto.create({
            name,
            type,
            price,
            rarity,
            description,
            region,
            spawnTimes,
            image,
            size
        })
        console.log('POST /produto Produto.create', request)
        return response.json(produto)
    },
    async show (request, response){

    },
    async index (request,  response){
        const produto = await Produto.find();
        console.log('GET /produto Produto.index', request)
        return response.json(produto);
    },
    async update (req, response){
        var _id = req.body._id

        Produto.findById(_id, function(err, doc) {
        if (err){
            console.error('error, no entry found');  
        }
        doc.name = req.body.name,
        doc.type = req.body.type,
        doc.price = req.body.price,
        doc.rarity = req.body.rarity,
        doc.description = req.body.description,
        doc.region = req.body.region,
        doc.spawnTimes = req.body.spawnTimes,
        doc.image = req.body.image,
        doc.size = req.body.size,
        doc.save();
        })
        console.log('PUT /produto Produto.update', req.body)
        return response.json(req.body)
    },
    async destroy (request, response){

    }
}