import Teacher from "../../models/Teacher";

export const getAllTeachers = async () => {
  return await Teacher.find();
};

export const getTeacherById = async (id: string) => {
  return await Teacher.findById(id);
};

export const createTeacher = async (data: any) => {
  return await Teacher.create(data);
};

export const updateTeacher = async (id: string, data: any) => {
  return await Teacher.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTeacher = async (id: string) => {
  return await Teacher.findByIdAndDelete(id);
};