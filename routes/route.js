import express from "express";
const router = express.Router();
import { create, Delete, Total, update, welcome } from "../controller/control.js";

router.get("/data", welcome);
router.get("/find", Total)
router.post("/create", create)
router.put("/update", update)
router.delete("delete", Delete)


export default router;