import { Request, Response } from "express";
import { check, validationResult } from "express-validator/check";
class BikeController {
    public async addBike(req: Request, res: Response) {
        try {

            const errors = await validationResult(req);
            console.log(errors.array(), errors.isEmpty());
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
          }
            console.log(req.body);


        }
        catch (err) {

        }

    }
}

export default new BikeController();