const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'uyewe532x23i9azzamg72nt';

// Enables CORS for all routes, allowing the server to accept requests from different origins 
// (like your React app running on a different port).
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Use this to parse JSON
app.use(express.json());

// Use this to parse cookies
app.use(cookieParser());
mongoose.connect('mongodb+srv://ardayildiz1074:tztCJ3r1dDt2pUny@cluster0.occyg50.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create(
            {
                username,
                password: bcrypt.hashSync(password, salt)
            }
        );
        res.json(userDoc);
    } catch(e) {
        console.log(e)
        res.status(400).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('Wrong credentials!');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok'); 
})
app.listen(4000);