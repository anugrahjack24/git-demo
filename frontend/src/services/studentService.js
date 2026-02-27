import api from "./api";

export const getStudents = () => api.get("/students");

export const deleteStudent = (id) =>
  api.delete("/students/${id}");