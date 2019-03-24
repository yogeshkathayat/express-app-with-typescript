import { Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
import { Bike } from "../models/bike.model";

class BikeController {
    public async addBike(req: Request, res: Response) {
        try {

            const errors = await validationResult(req);
            console.log(errors.array(), errors.isEmpty());
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            console.log(req.body);

            const addBikeRes = await Bike.create(req.body);
            console.log("addBikeRes", addBikeRes);

            return res.status(200).json({ bike: addBikeRes});


        }
        catch (err) {
            console.log("error is", err);

        }

    }
}

export default new BikeController();