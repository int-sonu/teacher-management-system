import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button, 
  Box,
  Alert
} from "@mui/material";

interface TeacherFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export default function TeacherForm({ open, onClose, onSubmit, initialData }: TeacherFormProps) {
  const [form, setForm] = useState(initialData || { name: "", subject: "", email: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(initialData || { name: "", subject: "", email: "" });
    setError("");
  }, [initialData, open]);

  const handleSubmit = async () => {
    setError("");
    try {
      await onSubmit(form);
      onClose();
    } catch (err: any) {
      const status = err.response?.status ? `[Error ${err.response.status}] ` : "";
      const msg = err.response?.data?.message || err.message || "Failed to save teacher";
      setError(`${status}${msg}`);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{initialData ? "Edit Teacher" : "Add New Teacher"}</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error" sx={{ mb: 2, mt: 1 }}>{error}</Alert>}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
          <TextField 
            name="name" 
            label="Full Name" 
            fullWidth 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />
          <TextField 
            name="subject" 
            label="Subject" 
            fullWidth 
            value={form.subject} 
            onChange={(e) => setForm({ ...form, subject: e.target.value })} 
          />
          <TextField 
            name="email" 
            label="Email Address" 
            fullWidth 
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          sx={{ background: "#00796b" }}
        >
          {initialData ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
