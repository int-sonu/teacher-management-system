import { Router } from "express";
import * as TeacherController from "./teacher.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import { validateTeacher } from "../../middleware/validation.middleware.js";

const router = Router();

router.get("/", authMiddleware, TeacherController.getTeachers);
router.get("/:id", authMiddleware, TeacherController.getTeacher);
router.post("/", authMiddleware, validateTeacher, TeacherController.create);
router.put("/:id", authMiddleware, validateTeacher, TeacherController.update);
router.delete("/:id", authMiddleware, TeacherController.remove);

export default router;