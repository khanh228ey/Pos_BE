const { Router } = require("express");
const router = Router();
const userController = require('../app/controllers/userController');

router.get('/users',userController.getUser);
router.post('/users', userController.createUser);
router.get('/users/:id',userController.findOneUser);
router.put('/users/:id',userController.updateUser);

module.exports = router;