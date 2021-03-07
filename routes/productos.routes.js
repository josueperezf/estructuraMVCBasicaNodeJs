const { Router} = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT, esAdminRole } = require('../middlewares/');
const { storeProducto, indexProducto, showProducto, updateProducto, destroyProducto } = require('../controllers/productos.controller');
const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');
const router = Router();
// listar productos
router.get('/',indexProducto);

// obtener una Producto por id, se necesita crear una validacion personalizada, existeProducto, crearlo en helpers
router.get('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
],showProducto);

// crear una Producto, solo para personas que tengan token
router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('categoria', 'No es un id valido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId ),
    validarCampos
], storeProducto );

// actualizar Producto por id
router.put('/:id',[
    check('id').custom(existeProductoPorId),
    check('categoria', 'categoria No es un id valido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId ),
    validarJWT,
    validarCampos
],updateProducto);

// Borrar una Producto logicamente - solo ADMINISTRADOR PUEDE BORRAR
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], destroyProducto);


module.exports = router;