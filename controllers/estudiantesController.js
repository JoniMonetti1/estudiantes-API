class EstudiantesController {
    constructor() {}

    consultar(req, res) {
        res.json({ msg: 'Consulta estudiantes' });
    }

    consultarUno(req, res) {
        res.json({ msg: `Consulta del estudiante: ${req.params.id}` });
    }
        
    ingresar(req, res) {
        res.json({ msg: 'Ingreso estudiantes' });
    }

    actualizar(req, res) {
        res.json({ msg: `Modificacion del estudiante: ${req.params.id}` });
    } 
        
    borrar(req, res) {
        res.json({ msg: `Eliminacion del estudiante: ${req.params.id}` });
    } 
}

module.exports = new EstudiantesController;