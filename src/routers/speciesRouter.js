
    const { Router} = require('express')()

        const {store, index, destroy, update} = require('../controllers/speciesController');

            const router = Router();


                router.post('/', store);
                router.get('/', index);
                router.delete('/:id', destroy);
                router.put('/:id', update);

            
                    module.exports = router;