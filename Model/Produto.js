const mongoose = require('mongoose')

const ProdutoSchema = mongoose.Schema({
    name:  String,
    type: String,
    price: Number,
    rarity: String,
    description: String,
    region: [String],
    spawnTimes: [Date],
    image: String,
    size: {
        min: {type: mongoose.Types.Decimal128},
        max: {type: mongoose.Types.Decimal128}
    }
})

module.exports = mongoose.model('Produto', ProdutoSchema)