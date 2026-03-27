import { Router } from "express";
import * as TeacherController from "./teacher.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, TeacherController.getTeachers);
router.get("/:id", authMiddleware, TeacherController.getTeacher);
router.post("/", authMiddleware, TeacherController.create);
router.put("/:id", authMiddleware, TeacherController.update);
router.delete("/:id", authMiddleware, TeacherController.remove);

export default router;