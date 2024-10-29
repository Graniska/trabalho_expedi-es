
    const {Schema, model, trusted} = require('mongoose');

        const expeditionSchema = new Schema ({
            location: {
                type: String,
                required: true
            }, 
            date: {
                type: Date,
                required: true, 
            },
            participants: {
                type: Schema.Types.ObjectId,
                ref: "Explorer",
                required: true
            },
            speciesFound: {
                type: Schema.Types.ObjectId,
                ref: 'Species',
                required: "true"
            }
        });

            module.exports = model ('Expedition', expeditionSchema);