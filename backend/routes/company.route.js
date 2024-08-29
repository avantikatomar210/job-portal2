import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(getCompany);
router.route("/get/:id").get(getCompanyById);
router.route("/update/:id").put(isAuthenticated,updateCompany);

export default router;