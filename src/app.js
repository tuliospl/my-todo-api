const express = require('express');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/login');
const tasksRoutes = require('./routes/tasks')

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use('/todo', loginRoutes, tasksRoutes);

app.get('/', (req, res) => {
    res.send("Parabens sua aplicação esta de pé.")
});

app.listen(port, () => {
    console.log(`O servidor esta sendo executado na porta:${port}`)
});