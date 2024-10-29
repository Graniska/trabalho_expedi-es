
    const { Router } = require('express');

        const {store, index, update, destroy} = require ('../controllers/expeditionController');

            const router = Router();

            router.post('/', store);;
            router.get('/', index);
            router.put('/:id', update);
            router.delete('/:id', destroy);

                module.exports = router;

                