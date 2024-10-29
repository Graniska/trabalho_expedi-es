
    const express = require('express')

    // esta linha de código tem como finalidade carregar variáveis de ambiente
    // de um arquivo .env
    require('dotenv').config();


        const explorerRouter = require('./src/routers/explorerRouter');
        const expeditionRouter = require('./src/routers/expeditionRouter');
        const speciesRouter = require('./src/routers/speciesRouter');


            const connectDB = require('./src/config/db.js');

                connectDB();


                    const app = express();


                        app.use(express.json());

                        app.use('/explorer', explorerRouter);
                        app.use('/expedition', expeditionRouter);
                        app.use('/species', speciesRouter);


                            app.listen(3000, () => console.log('Servidor rodando na porta 3000'));