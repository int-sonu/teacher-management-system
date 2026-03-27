import Teacher from "../../models/Teacher.js";

export const getAllTeachers = async () => {
  return await Teacher.find();
};

export const getTeacherById = async (id: string) => {
  return await Teacher.findById(id);
};

export const createTeacher = async (data: any) => {
  const existing = await Teacher.findOne({ email: data.email });
  if (existing) throw new Error("Teacher with this email already exists");
  return await Teacher.create(data);
};

export const updateTeacher = async (id: string, data: any) => {
  return await Teacher.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTeacher = async (id: string) => {
  return await Teacher.findByIdAndDelete(id);
};