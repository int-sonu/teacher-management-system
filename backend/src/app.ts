import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes.js";
import teacherRoutes from "./modules/teacher/teacher.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);

export default app;