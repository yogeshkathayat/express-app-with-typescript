import express from "express";
import bikeValidation from "../validations/bike.validation";

import controller from "../controllers/bike.controller";
const router = express.Router();


/**
 * @api {post} /api/v1/bike/add bikeadd
 * @apiDescription add a bike into db
 * @apiVersion 1.0.0
 * @apiName add
 * @apiGroup bike
 * @apiPermission public
 *
 * @apiParam  {String}         name     User's name
 * @apiParam  {String{..128}}  email   User's email
 *
 *
 *
 * @apiSuccess  {String}  user.id             User's id
 * @apiSuccess  {String}  user.name           User's name
 * @apiSuccess  {String}  user.email          User's email
 * @apiSuccess  {String}  user.role           User's role
 * @apiSuccess  {Date}    user.createdAt      Timestamp
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 * @apiError (Unauthorized 401)  Unauthorized     Incorrect email or password
 */
router.route("/add")
    .post(bikeValidation("add"), controller.addBike);

export default router;