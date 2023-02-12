//importaciones
const { Router } = require('express');
const { check } = require('express-validator');

const { getCategorias, postCategorias, putCategorias, deleteCategorias} = require('../controllers/categorias');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/mostrar', getCategorias);
router.post('/agregar', postCategorias);
router.put('/editar/:id', putCategorias);
router.delete('/eliminar/:id', deleteCategorias);


module.exports = router;