import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch<any>();

  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <Container>
      <h2>Login</h2>

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Button variant="contained" onClick={() => dispatch(login(form))}>
        Login
      </Button>
    </Container>
  );
}