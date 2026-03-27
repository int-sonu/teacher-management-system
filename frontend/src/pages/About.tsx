import { Container, Typography, Box, Paper, Grid } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="overline" sx={{ color: "#00796b", fontWeight: "700", letterSpacing: 2 }}>
            Our Mission
          </Typography>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: "800", color: "#111827" }}>
            Revolutionizing Academic <span style={{ color: "#00796b" }}>Management</span>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Course space is dedicated to providing teachers and institutions with the most intuitive, powerful, and beautiful tools for managing educational resources. We believe that great teaching starts with great organization.
          </Typography>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "800", color: "#00796b" }}>10k+</Typography>
              <Typography variant="body2" color="text.secondary">Active Users</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "800", color: "#00796b" }}>500+</Typography>
              <Typography variant="body2" color="text.secondary">Institutions</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img 
            src="/home.jpg" 
            alt="About Course space" 
            style={{ 
              width: "100%", 
              borderRadius: "2rem", 
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" 
            }} 
          />
        </Grid>
      </Grid>
    </Container>
  );
}
