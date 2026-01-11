const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');
const { getProfile } = require('../controllers/auth.controller');
const auth = require("../middleware/auth.middleware");


router.post('/login', login);

// Protected routes
router.get("/profile", auth, getProfile);

module.exports = router;
