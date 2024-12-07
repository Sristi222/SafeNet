const express = require('express');
const router = express.Router();
const User = require('../models/user.model'); // Assuming your User model is in the models folder

// Sign-up Route
router.post('/signup', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.json({ message: 'Email is not available' });
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password,
        });

        const savedUser = await user.save();

        res.json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Sign-in Route
router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
