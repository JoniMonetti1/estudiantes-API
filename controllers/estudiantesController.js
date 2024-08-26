const db = require('../database/conexion');

class EstudiantesController {
    constructor() {}

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM estudiantes`, (err, result) => {
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
            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id], (err, result) => {
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
            const { dni, nombre, apellido, email } = req.body;
            db.query(`INSERT INTO estudiantes
                        (id, dni, nombre, apellido, email)
                        VALUES
                        (NULL, ?, ?, ?, ?);`,[dni, nombre, apellido, email], (err, result) => {
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
            const { dni, nombre, apellido, email } = req.body;
            db.query(`UPDATE estudiantes 
                        SET dni = ?, nombre = ?, apellido = ?, email = ?
                        WHERE id = ?`,[dni, nombre, apellido, email, id], (err, result) => {
                            if (err) {
                                res.status(500).send(err.message);
                            } else if (result.affectedRows == 1) {
                                res.json({msg: 'Operacion realizada con exito'})
                            }
                        } )
        } catch (err) {
            res.status(500).send(err.message);
        }
    } 
        
    borrar(req, res) {
        try {
            const {id} = req.params;
            db.query(`DELETE FROM estudiantes WHERE id = ?`, [id], (err, result) => {
                if (err) {
                    res.status(500).send(err.message);
                } else if (result.affectedRows > 0) {
                    res.json({msg: 'Operacion realizada con exito'})
                }
            })
        } catch (err) {
            res.status(500).send(err.message);
        }
    } 
}

module.exports = new EstudiantesController;