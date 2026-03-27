import { useState } from "react";
import { TextField, Button, Container, Box, Typography, Paper, Alert, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await dispatch(login(form)).unwrap();
      navigate("/teachers");
    } catch (err: any) {
      setError(err?.message || "Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Paper sx={{ p: 5, borderRadius: "2rem", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Box sx={{ p: 2, background: "#f0fdfa", color: "#00796b", borderRadius: "1rem", mb: 2 }}>
            <LockOutlined sx={{ fontSize: 32 }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: "800", color: "#111827" }}>Welcome Back</Typography>
          <Typography variant="body2" color="text.secondary">Enter your credentials to access your dashboard</Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 3, borderRadius: "1rem" }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              py: 2,
              background: "#00796b",
              borderRadius: "3rem",
              fontWeight: "700",
              fontSize: "1rem",
              boxShadow: "0 10px 15px -3px rgba(0, 121, 107, 0.3)",
              "&:hover": { background: "#004d40" }
            }}
          >
            Log In
          </Button>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#00796b", fontWeight: "700", textDecoration: "none" }}>
              Sign Up for Free
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}