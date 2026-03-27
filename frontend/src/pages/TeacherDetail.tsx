import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Paper, Box, Button, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import api from "../api/axios.js";

export default function TeacherDetail() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await api.get(`/teachers/${id}`);
        setTeacher(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [id]);

  if (loading) return <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}><CircularProgress /></Box>;
  if (!teacher) return <Container sx={{ py: 10 }}><Typography variant="h5">Teacher not found</Typography></Container>;

  return (
    <Container sx={{ py: 4 }}>
      <Button component={Link} to="/teachers" startIcon={<ArrowBack />} sx={{ mb: 3 }}>
        Back to List
      </Button>
      <Paper sx={{ p: 4, borderRadius: "1rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
        <Typography variant="h4" sx={{ color: "#00796b", mb: 2 }}>{teacher.name}</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1"><strong>Subject:</strong> {teacher.subject}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {teacher.email}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            ID: {teacher._id}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
