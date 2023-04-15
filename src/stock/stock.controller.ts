import { Request, Response } from "express";
import { StockService } from "./stock.service";

class StockController {
    async create (req: Request, res: Response) {
        const create = await new StockService().create()

        res.status(200).json(create)
    }
    
}

export default new StockController()