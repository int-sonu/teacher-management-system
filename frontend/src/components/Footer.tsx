import { Container, Typography, Box, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ 
      background: "#f9fafb", 
      pt: 8, 
      pb: 4, 
      mt: "auto",
      borderTop: "1px solid #e5e7eb" 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: "#00796b", fontWeight: "900", mb: 2 }}>
              Course space
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300 }}>
              The modern way to manage education. Empowering teachers and students globally with intuitive tools.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MuiLink href="#" color="inherit" sx={{ "&:hover": { color: "#00796b" } }}><Facebook fontSize="small" /></MuiLink>
              <MuiLink href="#" color="inherit" sx={{ "&:hover": { color: "#00796b" } }}><Twitter fontSize="small" /></MuiLink>
              <MuiLink href="#" color="inherit" sx={{ "&:hover": { color: "#00796b" } }}><LinkedIn fontSize="small" /></MuiLink>
              <MuiLink href="#" color="inherit" sx={{ "&:hover": { color: "#00796b" } }}><Instagram fontSize="small" /></MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "800", mb: 2 }}>QUICK LINKS</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link to="/" style={{ color: "#6b7280", fontSize: "0.875rem" }}>Home</Link>
              <Link to="/about" style={{ color: "#6b7280", fontSize: "0.875rem" }}>About Us</Link>
              <Link to="/contact" style={{ color: "#6b7280", fontSize: "0.875rem" }}>Contact Us</Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "800", mb: 2 }}>SUPPORT</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link to="#" style={{ color: "#6b7280", fontSize: "0.875rem" }}>Privacy Policy</Link>
              <Link to="#" style={{ color: "#6b7280", fontSize: "0.875rem" }}>Terms of Service</Link>
              <Link to="#" style={{ color: "#6b7280", fontSize: "0.875rem" }}>Help Center</Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "800", mb: 2 }}>NEWSLETTER</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Subscribe to get latest updates and news.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <input 
                type="text" 
                placeholder="Email address" 
                style={{ 
                  padding: "0.5rem 1rem", 
                  borderRadius: "2rem", 
                  border: "1px solid #e5e7eb",
                  flexGrow: 1,
                  fontSize: "0.875rem"
                }} 
              />
              <button style={{ 
                background: "#00796b", 
                color: "#fff", 
                padding: "0.5rem 1.5rem", 
                borderRadius: "2rem",
                fontWeight: "600" 
              }}>
                Join
              </button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ pt: 4, borderTop: "1px solid #f3f4f6", textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Course space. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
