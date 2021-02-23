const {Router} = require('express');
const {index, store, update} = require('../controllers/usuarios.controller');
const router = Router();
// se coloca index, para pasar la referencia, no para ejecutar la funcion index
router.get('/', index ),
router.post('/', store ),
router.put('/:id', update ),
module.exports = router;