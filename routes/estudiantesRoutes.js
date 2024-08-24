const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

//rutas estaticas
router.get('/', estudiantesController.consultar);

router.post('/', estudiantesController.ingresar);

//agrupar todas las rutas dinamicas con id
router.route('/:id')
    .get(estudiantesController.consultarUno)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar)
    

module.exports = router;