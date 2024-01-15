const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const loginRouter = require('./login');
const shtoRouter  = require('./shtimiproduktit');
const listaRouter = require('./lista');
const deleteRouter = require('./delete')
const kategoriRouter = require('./kategorite');
const updateRouter = require('./update')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.json());
app.use(cors());
app.use('/login', loginRouter);
app.use('/shtoproduktin', shtoRouter);
app.use('/lista', listaRouter);
app.use('/delete', deleteRouter);
app.use('/kategorit', kategoriRouter);
app.use('/update', updateRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveri duke u ekzekutuar në portin : ${PORT}`);
});

