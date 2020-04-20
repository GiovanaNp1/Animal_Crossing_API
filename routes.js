const { Router } = require('express')
const routes = Router();
const ProdutoController = require('./Controllers/ProdutosController')


 routes.post('/produto', ProdutoController.create);

 module.exports = routes