import { Router } from "express";
import { getAllKpopMerch } from "../controllers/kpopController.js";

const router = Router()

router.get('/', getAllKpopMerch)

export default router