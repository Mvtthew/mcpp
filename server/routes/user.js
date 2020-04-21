const router = require('express').Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/config').jwtSecret;

// User model
const User = require('../models/User');
// Middleware
const isAuth = require('../middleware/isAuth');

// Users Service
const UsersService = require('../services/UsersService');
const usersService = new UsersService();

// Get requested user data 
router.get('/', isAuth, (req, res) => usersService.getUser(req).subscribe(data => res.json(data)));

// Update requested user
router.put('/', isAuth, (req, res) => usersService.updateUser(req).subscribe(data => res.json(data)));

// Delete requested user
router.delete('/', isAuth, (req, res) => usersService.deleteUser(req).subscribe(data => res.json(data)));

// User get token endpoint
router.post('/token', (req, res) => usersService.userGetToken(req).subscribe(data => res.json(data)));

// User register endpoint
router.post('/register', (req, res) => usersService.registerUser(req).subscribe(data => res.json(data)));

module.exports = router;