const db = require('../database/conexion');

class CursosController {
    constructor() {}

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM cursos`, (err, result) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                res.json(result);
            })
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    consultarUno(req, res) {
        try {
            const {id} = req.params;
            db.query(`SELECT * FROM cursos WHERE id = ?`, [id], (err, result) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                res.json(result);
            })
        } catch (err) {
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
                                res.status(500).send(err.message);
                            }
                            res.status(201).json({id: result.insertId});
                        } )
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        const {id} = req.params;
        try {
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(`UPDATE cursos 
                        SET nombre = ?, descripcion = ?, profesor_id = ?
                        WHERE id = ?`,[nombre, descripcion, profesor_id, id], (err, result) => {
                            if (err) {
                                res.status(500).send(err);
                            } else if (result.affectedRows == 1) {
                                res.json({msg: 'Operacion realizada con exito'})
                            }
                        } )
        } catch (err) {
            res.status(500).send(err.message);
        }
    }  
        
    borrar(req, res) {
        const {id} = req.params;
        try {
            db.query(`DELETE FROM cursos WHERE id=?`,[id], (err, result) => {
                if (err) {
                    res.status(500).send(err.message);
                } else if (result.affectedRows == 1) {
                    res.json({msg: 'Operacion realizada con exito'})
                }
            })
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    
    asociarEstudiante(req, res) {
        const {curso_id, estudiante_id} = req.body;
        try {
            db.query(`INSERT INTO cursos_estudiantes
                        (curso_id, estudiante_id)
                        VALUES
                        (?,?);`,[curso_id, estudiante_id], (err, result) => {
                            if (err) {
                                res.status(500).send(err.message);
                            } else if (result.affectedRows == 1) {
                                res.json({msg: 'Operacion realizada con exito'})
                            }
                        })
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new CursosController;