const { Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { login, googleSignIn } = require('../controllers/auth.controller');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').notEmpty(),
    check('correo', 'Debe ser un correo valido').isEmail(),
    check('password', 'el password es obligatoria').notEmpty(),
    validarCampos
],login );

router.post('/google',[
    check('id_token', 'el id token es necesario').notEmpty(),
    validarCampos
],googleSignIn );


module.exports = router;