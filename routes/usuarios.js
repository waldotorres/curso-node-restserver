const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


module.exports = router;

router.get('/', usuariosGet );
router.post('/', usuariosPost);
router.put('/:id',usuariosPut );
router.patch('/', usuariosPatch);
router.delete('/', usuariosDelete);
