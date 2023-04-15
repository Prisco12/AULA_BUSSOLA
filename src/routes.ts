import { Router } from 'express'
import userController from './users/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()


//USERS

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)


//PRODUCTS

routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get('/products-random', productController.random)
routes.get('/products-total', productController.total)
routes.get('/productsFile', productController.write)
routes.get('/productsRead', productController.read)

//ESTOQUE

routes.post('/stock', stockController.create)

// 17 - Estamos exportando a constante routes
export default routes