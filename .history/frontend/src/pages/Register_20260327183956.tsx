import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

export default function Register() {
  const dispatch = useDispatch<any>();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <Container>
      <h2>Register</h2>

      <TextField label="Name" fullWidth onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <TextField label="Email" fullWidth onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <Button variant="contained" onClick={() => dispatch(register(form))}>
        Register
      </Button>
    </Container>
  );
}