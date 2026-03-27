import { useEffect, useState } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton,
  Box,
  Alert
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import api from "../api/axios";
import TeacherForm from "../components/TeacherForm";

export default function Teachers() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [error, setError] = useState("");

  const fetchTeachers = async () => {
    try {
      const res = await api.get("/teachers");
      setTeachers(res.data);
    } catch (err: any) {
      const status = err.response?.status ? `[Error ${err.response.status}] ` : "";
      setError(`${status}Failed to fetch teachers`);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await api.delete(`/teachers/${id}`);
        fetchTeachers();
      } catch (err: any) {
        const status = err.response?.status ? `[Error ${err.response.status}] ` : "";
        setError(`${status}Failed to delete teacher`);
      }
    }
  };

  const handleSubmit = async (data: any) => {
    if (selectedTeacher) {
      await api.put(`/teachers/${selectedTeacher._id}`, data);
    } else {
      await api.post("/teachers", data);
    }
    setOpenForm(false);
    setSelectedTeacher(null);
    fetchTeachers();
  };

  const handleEdit = (teacher: any) => {
    setSelectedTeacher(teacher);
    setOpenForm(true);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4">Teacher Management</Typography>
        <Button 
          variant="contained" 
          startIcon={<Add />} 
          onClick={() => { setSelectedTeacher(null); setOpenForm(true); }}
          sx={{ background: "#00796b" }}
        >
          Add Teacher
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

      <TableContainer component={Paper} sx={{ boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
        <Table>
          <TableHead sx={{ background: "#f9fafb" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((t) => (
              <TableRow key={t._id} hover>
                <TableCell>
                  <Link to={`/teachers/${t._id}`} style={{ color: "#00796b", fontWeight: "600" }}>
                    {t.name}
                  </Link>
                </TableCell>
                <TableCell>{t.subject}</TableCell>
                <TableCell>{t.email}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEdit(t)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(t._id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {teachers.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                  No teachers found. Click "Add Teacher" to create one.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {openForm && (
        <TeacherForm 
          open={openForm} 
          onClose={() => setOpenForm(false)} 
          onSubmit={handleSubmit}
          initialData={selectedTeacher}
        />
      )}
    </Container>
  );
}