const {Schema, model, trusted} = require('mongoose');

        const explorerSchema = new Schema ({
            explorer: {
                type: String,
                required: true
            }, 
            fieldOfStudy: {
                type: String,
                required: true, 
            },
            expeditionsParticipated: {
                type: Number,
                required: true
            }
        });

            module.exports = model ('Explorer', explorerSchema);