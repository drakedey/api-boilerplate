import express from "express";
import claimsController from "../controllers/claims.controller";

const router = express.Router();

router.route("/").post(claimsController.create);

export default router;
