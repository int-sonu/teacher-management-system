import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout() as any);
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00796b" }}>
        <Link to="/">Course space</Link>
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none" }}>About Us</Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>Contact Us</Link>
        {user && <Link to="/teachers" style={{ textDecoration: "none" }}>Dashboard</Link>}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {user ? (
          <button 
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              border: "1px solid #00796b",
              background: "transparent",
              color: "#00796b",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={{ color: "#374151", fontWeight: "600", textDecoration: "none" }}>Login</Link>
            <Link to="/register" style={{
              padding: "0.5rem 1.5rem",
              borderRadius: "2rem",
              background: "#00796b",
              color: "#fff",
              fontWeight: "600",
              textDecoration: "none"
            }}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}