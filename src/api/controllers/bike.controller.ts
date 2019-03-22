import { Request, Response } from "express";

class BikeController {
    public async addBike(req: Request, res: Response) {
        try {
            console.log(req.body);


        }
        catch (err) {

        }

    }
}

export default new BikeController();