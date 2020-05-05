const { Router } = require('express')
const routes = Router();
const ProdutoController = require('./Controllers/ProdutosController')


 routes.get('/produto', ProdutoController.index);
 routes.post('/produto', ProdutoController.create);
 routes.put('/produto', ProdutoController.update);
 routes.get('/produto/:_id', ProdutoController.show);
 routes.patch('/produto/update/:id', ProdutoController.updatePatch)
 routes.delete('/produto/:_id', ProdutoController.destroy);


 module.exports = routes