
    const Expedition = require ('../models/expeditionModel');

        const store = async (req, res) => {
            try {
                const expedition = await Expedition.create(req.body);
                return res.status(201).json(expedition);
            } catch (error) {
                return res.status(400).json({message: error.message});
            }
        };

            const index = async (req,res) => {
                try {
                    const expedition = await Expedition.find().exec();
                    return res.status(200);json(expedition);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };

            const update = async (req, res) => {
                try {
                    const expedition = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec()
                    return res.status(200).json(expedition);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };

            const destroy = async (req, res) => {
                try {
                    const expedition = await Expedition.findByIdAndDelete(req.params.id).exec();
                    return res.status(200).json(expedition);
                } catch (error) {
                    return res.status(400).json({message: error.message});
                }
            };

                module.exports = {destroy, update, index, store}