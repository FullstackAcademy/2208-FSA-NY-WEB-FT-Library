const express = require('express');
const app = express();
app.use(express.json());
const { models: { User, Note }} = require('./db');
const path = require('path');

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.byToken(token);
    req.user = user;
    next();
  } catch(error) {
    next(error);
  }
};

app.post("/api/auth", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    if(!user) res.sendStatus(404);
    const token = await user.generateToken();
    res.send(token); 
  } catch (ex) {
    next(ex);
  }
});

app.get('/api/auth', requireToken, async(req, res, next) => {
  if(req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(404);
  }
});

app.get('/api/users/:id/notes', requireToken, async (req, res, next) => {
  try {
    const userNotes = await Note.findAll({
      where: {
        userId: req.user.id
      }
    });
    res.send(userNotes);
  } catch(err) {
    next(err)
  }
})

app.use((err, req, res, next)=> {
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;