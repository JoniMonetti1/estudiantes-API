const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRouter = require('./routes/estudiantesRoutes');
const profesoresRouter = require('./routes/profesoresRoutes');
const cursosRouter = require('./routes/cursosRoutes');

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//Route cursos
app.use('/cursos', cursosRouter)

//Route profesores
app.use('/profesores', profesoresRouter);

//Route estudiantes
app.use('/estudiantes', estudiantesRouter);

app.listen(3000, () => {
    console.log('Servidor activo');
})