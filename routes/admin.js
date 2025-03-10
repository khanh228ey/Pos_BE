const { Router } = require("express");
const router = Router();
const userController = require('../app/controllers/userController');

router.post('/users', userController.createUser);


module.exports = router;