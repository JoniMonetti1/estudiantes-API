const express = require('express');
const router = express.Router();

//rutas estaticas
router.get('/', (req, res) => {
    res.json({ msg: 'Consulta profesores' });
})

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso profesores' });
})

//agrupar todas las rutas dinamicas con id
router.route('/:id')
    .get((req, res) => {
        res.json({ msg: `Consulta del profesore: ${req.params.id}` });
    })
    .put((req, res) => {
        res.json({ msg: `Modificacion del profesore: ${req.params.id}` });
    })
    .delete((req, res) => {
        res.json({ msg: `Eliminacion del profesore: ${req.params.id}` });
    })
    

module.exports = router;