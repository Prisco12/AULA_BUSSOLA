import StockModel from './stock.schema'
import ProductModel from '../products/product.schema'


export class StockService {

    async create(){
        const product = await ProductModel.find()

        const result = product.map(item => {
           const productStock = {
                name: item.name,
                quantify: item.quantify,
                price: item.price,
                stockValue: item.price * item.quantify
            }
            return productStock
        })

        return StockModel.create(result)
    
    }

}
