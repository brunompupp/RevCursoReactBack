const express = require('express');

const bodyParser = require('body-parser');

const morgan = require('morgan');

const cors = require('cors');

const porta = 3333;

const app = express();


app.use(cors());


app.use(morgan('dev'));


app.use(bodyParser.json({

	limit: '5mb'
}));


app.use(bodyParser.urlencoded({
	extended: true
}));

const index = require('./routes/index');

const usuarios = require('./routes/usuarios');

app.use('/usuarios', usuarios)

app.use('/', index);

app.listen(porta, () =>{
console.log('api rodando na porta ', porta);

})