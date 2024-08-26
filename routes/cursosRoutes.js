const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//rutas estaticas
router.get('/', cursosController.consultar);

router.post('/', cursosController.ingresar);

//rutas para manejar las relaciones entre estudiantes y cursos
router.post('/registro', cursosController.asociarEstudiante);

//agrupar todas las rutas dinamicas con id
router.route('/:id')
    .get(cursosController.consultarUno)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar)
    
module.exports = router;