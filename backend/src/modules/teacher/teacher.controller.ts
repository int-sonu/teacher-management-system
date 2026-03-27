import type { Request, Response } from "express";
import * as TeacherService from "./teacher.service.js";

export const getTeachers = async (req: Request, res: Response) => {
  const data = await TeacherService.getAllTeachers();
  res.json(data);
};

export const getTeacher = async (req: Request, res: Response) => {
  const data = await TeacherService.getTeacherById(req.params.id!);
  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const data = await TeacherService.createTeacher(req.body);
  res.status(201).json(data);
};

export const update = async (req: Request, res: Response) => {
  const data = await TeacherService.updateTeacher(req.params.id!, req.body);
  res.json(data);
};

export const remove = async (req: Request, res: Response) => {
  await TeacherService.deleteTeacher(req.params.id!);
  res.json({ message: "Deleted successfully" });
};