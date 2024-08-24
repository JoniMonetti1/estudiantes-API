const express = require('express');
const app = express();
const estudiantesRouter = require('./routes/estudiantesRoutes');
const profesoresRouter = require('./routes/profesoresRoutes');

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//Route profesores
app.use('/profesores', profesoresRouter);

//Route estudiantes
app.use('/estudiantes', estudiantesRouter);

app.listen(3000, () => {
    console.log('Servidor activo');
})