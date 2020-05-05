const Produto = require('../Model/Produto')

module.exports = {
    async create (request, response){
        const { name, type, price, rarity, description, region, spawnTimes, image, size, percentCatch  } = request.body
        
        let produto = await Produto.create({
            name,
            type,
            price,
            rarity,
            description,
            region,
            spawnTimes,
            image,
            size,
            percentCatch
        })
        console.log('POST /produto Produto.create', request.body)
        return response.json(produto)
    },

    async show (request, response){
        Produto.findById(request.params._id)
        .then(idFound => {
            if(!idFound){ return response.res.status(404).end(); }
            return response.status(200).json(idFound);
        })
        .catch(err => next(err)); 
        console.log('GET /produto/:id Produto.show', request.params)
    },

    async index (request,  response){
        const produto = await Produto.find();
        console.log('GET /produto Produto.index')
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

    async updatePatch (request, response){
        var _id = request.params._id

        await Produto.findOneAndUpdate(_id, request.body.produto, function(err, doc) {
        if (err){
            console.error('error, no entry found');  
        }

        const name = request.body.name || doc.name
        const type = request.body.type || doc.type
        const price = request.body.price || doc.price
        const rarity = request.body.rarity || doc.rarity
        const description = request.body.description || doc.description
        const region = request.body.region || doc.region
        const spawnTimes = request.body.spawnTimes || doc.spawnTimes
        const image = request.body.image || doc.image
        const size = request.body.size

        doc.name = name,
        doc.type = type,
        doc.price = price,
        doc.rarity = rarity,
        doc.description = description,
        doc.region = region,
        doc.spawnTimes = spawnTimes,
        doc.image = image,
        doc.size = size,
        doc.save();
        })
        console.log('PUT /produto Produto.update', request.body)
        return response.json(request.body)
    },

    async destroy (request, response){
        const params = request.params
        await Produto.findByIdAndDelete(params._id)
        console.log('DELETE /produto Produto.destroy')
        return response.send('Destroy')
    }
}