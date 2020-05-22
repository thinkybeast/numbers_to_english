import { Router } from "express";
import numToEnglish from "../controllers";

const router = Router();

router.get("/num_to_english", numToEnglish);

export default router;
