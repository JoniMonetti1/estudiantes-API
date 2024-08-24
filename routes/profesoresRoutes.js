const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesoresController');

//rutas estaticas
router.get('/', profesorController.consultar);

router.post('/', profesorController.ingresar);

//agrupar todas las rutas dinamicas con id
router.route('/:id')
    .get(profesorController.consultarUno)
    .put(profesorController.actualizar)
    .delete(profesorController.borrar)
    
module.exports = router;