import express from "express";
const router = express.Router();
import { create, Delete, Total, Update,welcome } from "../controller/control.js";

router.get("/data", welcome);
router.get("/find", Total)
router.post("/create", create)
router.put("/todo/:_id", Update)
router.delete("/todo/:_id", Delete)


export default router;