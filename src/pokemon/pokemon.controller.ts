import { Request, Response } from "express";
import { ProductService } from "./pokemon.service";

class ProductController {
    async create(req: Request, res: Response){
        const product = await new ProductService().create()

        return res.status(200).json('Criado com sucesso')
    }
    async list(req: Request, res: Response){
        const product = await new ProductService().listPokes()

        return res.status(200).json(product)
    }
   
}

export default new ProductController()