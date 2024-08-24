const express = require('express');
const router = express.Router();

//rutas estaticas
router.get('/', (req, res) => {
    res.json({ msg: 'Consulta estudiantes' });
})

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso estudiantes' });
})

//agrupar todas las rutas dinamicas con id
router.route('/:id')
    .get((req, res) => {
        res.json({ msg: `Consulta del estudiante: ${req.params.id}` });
    })
    .put((req, res) => {
        res.json({ msg: `Modificacion del estudiante: ${req.params.id}` });
    })
    .delete((req, res) => {
        res.json({ msg: `Eliminacion del estudiante: ${req.params.id}` });
    })
    

module.exports = router;