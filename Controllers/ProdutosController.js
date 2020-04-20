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
        console.log(produto)
        return response.json(produto)
    },
    async show (request, response){

    },
    async index (request,  response){

    },
    async update (request, response){

    },
    async destroy (request, response){

    }
}