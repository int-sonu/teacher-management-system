import { useState } from "react";
import { TextField, Button, Container, Box, Typography, Paper, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";

export default function Register() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(register(form)).unwrap();
      navigate("/login");
    } catch (err: any) {
      const status = err.status || err.response?.status ? `[Error ${err.status || err.response?.status}] ` : "";
      setError(`${status}${err || "Registration failed. Please try again."}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: "700", textAlign: "center", color: "#004d40" }}>
          Create Account
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center", color: "text.secondary" }}>
          Join Course space to manage your professional teachers.
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField 
            label="Full Name" 
            fullWidth 
            required 
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />
          <TextField 
            label="Email Address" 
            fullWidth 
            required 
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />
          <TextField 
            label="Password" 
            fullWidth 
            required 
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })} 
          />
          
          <Button 
            variant="contained" 
            type="submit"
            size="large"
            sx={{ 
              py: 1.5, 
              background: "#00796b", 
              borderRadius: "3rem",
              fontWeight: "600",
              "&:hover": { background: "#004d40" }
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#00796b", fontWeight: "600" }}>
              Log In
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}