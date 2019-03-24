import express from "express";
import bikeRoute from "./bike.route";
const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.status(200).send("OK"));
/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/bike", bikeRoute);

export default router;
