import { Container, Typography, Box, Paper, TextField, Button, Grid } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: "800", mb: 2 }}>Get in <span style={{ color: "#00796b" }}>Touch</span></Typography>
        <Typography variant="body1" color="text.secondary">Have questions? We're here to help you manage your success.</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Paper sx={{ p: 1.5, background: "#f0fdfa", color: "#00796b", borderRadius: "1rem" }}><Email /></Paper>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>Email Us</Typography>
                <Typography variant="body2" color="text.secondary">support@coursespace.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Paper sx={{ p: 1.5, background: "#f0fdfa", color: "#00796b", borderRadius: "1rem" }}><Phone /></Paper>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>Call Us</Typography>
                <Typography variant="body2" color="text.secondary">+1 (555) 000-0000</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Paper sx={{ p: 1.5, background: "#f0fdfa", color: "#00796b", borderRadius: "1rem" }}><LocationOn /></Paper>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>Visit Us</Typography>
                <Typography variant="body2" color="text.secondary">123 Education St, Knowledge City</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 4, borderRadius: "1.5rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Grid container spacing={2}>
                <Grid size={6}><TextField label="First Name" fullWidth /></Grid>
                <Grid size={6}><TextField label="Last Name" fullWidth /></Grid>
              </Grid>
              <TextField label="Email" fullWidth />
              <TextField label="Message" multiline rows={4} fullWidth />
              <Button variant="contained" size="large" sx={{ 
                py: 1.5, background: "#00796b", borderRadius: "3rem", fontWeight: "600",
                "&:hover": { background: "#004d40" }
              }}>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
