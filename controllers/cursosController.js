class CursosController {
    constructor() {}

    consultar(req, res) {
        res.json({ msg: 'Consulta Cursos' });
    }

    consultarUno(req, res) {
        res.json({ msg: `Consulta del Curso: ${req.params.id}` });
    }
        
    ingresar(req, res) {
        res.json({ msg: 'Ingreso Cursos' });
    }

    actualizar(req, res) {
        res.json({ msg: `Modificacion del Curso: ${req.params.id}` });
    } 
        
    borrar(req, res) {
        res.json({ msg: `Eliminacion del Curso: ${req.params.id}` });
    } 
}

module.exports = new CursosController;