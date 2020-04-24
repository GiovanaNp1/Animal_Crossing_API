const mongoose = require('mongoose')

const VillagersSchema = mongoose.Schema({
    name: String,
    gender: String,
    personality: String,
    specie: String,
    birthday: Date,
    theme: String,
    image: String,
    realeaseDate: Date,
    description: String,
    relatedClasses: [String],
    relatedMemories: [String],
    rewards: [String],
    cokkieAssocieted:[String]
})

module.exports = mongoose.model('Villagers', VillagersSchema)