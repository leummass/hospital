/*
    route: '/api/medicos'
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const {
    getMedicos,
    actualizarMedico,
    crearMedico,
    borrarMedico,
} = require('../controllers/medicos.controller')
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/", getMedicos);

router.post(
    "/",
    [
    ],
    crearMedico
    //los middlewares se definen antes de la función del controlador, si es más de uno se utilizan corchetes
);

router.put(
    "/:id",
    [
    ],
    actualizarMedico
);

router.delete("/:id",  borrarMedico);

module.exports = router;
