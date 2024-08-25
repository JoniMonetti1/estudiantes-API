const db = require('../database/conexion');

class CursosController {
    constructor() {}

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM cursos`, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.json(result);
            })
        } catch (error) {
            res.status(500).send(err.message);
        }
    }

    consultarUno(req, res) {
        try {
            const {id} = req.params;
            db.query(`SELECT * FROM cursos WHERE id = ?`, [id], (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.json(result);
            })
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
        
    ingresar(req, res) {
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(`INSERT INTO cursos
                        (id, nombre, descripcion, profesor_id)
                        VALUES
                        (NULL, ?, ?, ?);`,[nombre, descripcion, profesor_id], (err, result) => {
                            if (err) {
                                res.status(500).send(err);
                            }
                            res.status(201).json({id: result.insertId});
                        } )
        } catch (error) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        res.json({ msg: `Modificacion del Curso: ${req.params.id}` });
    } 
        
    borrar(req, res) {
        res.json({ msg: `Eliminacion del Curso: ${req.params.id}` });
    } 
}

module.exports = new CursosController;