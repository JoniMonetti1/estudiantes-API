class ProfesoresController {
    constructor() {}

    consultar(req, res) {
        res.json({ msg: 'Consulta profesores' });
    }

    consultarUno(req, res) {
        res.json({ msg: `Consulta del profesor: ${req.params.id}` });
    }
        
    ingresar(req, res) {
        res.json({ msg: 'Ingreso profesores' });
    }

    actualizar(req, res) {
        res.json({ msg: `Modificacion del profesor: ${req.params.id}` });
    } 
        
    borrar(req, res) {
        res.json({ msg: `Eliminacion del profesor: ${req.params.id}` });
    } 
}

module.exports = new ProfesoresController;