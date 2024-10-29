
    const {Schema, model, trusted} = require('Mongoose');

        const speciesSchema = new Schema ({
            name: {
                type: String,
                required: true
            },
            discoveryLocation: {
                type: String,
                required: true
            },
            rarity: {
                type: Number,
                required: true
            },
            documented: {
                type: Number,
                required: false  //BOOLEAN
            }
        });

            module.exports = model ("Species",speciesSchema );

