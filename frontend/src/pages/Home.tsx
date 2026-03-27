import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container" style={{ minHeight: "calc(100vh - 72px)", display: "flex", alignItems: "center", padding: "2rem 0" }}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "4rem", 
        alignItems: "center" 
      }}>
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
            Improve your <br />
            <span style={{ color: "#00796b", borderBottom: "4px solid #ff9800" }}>Skill</span> <br />
            with Different <br />
            Way
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#6b7280", marginBottom: "2.5rem", maxWidth: "450px" }}>
            Experience a revolutionary way of academic tracking and growth. Set your own pace, manage your resources, and excel in your field with our professional management suite.
          </p>
          <Link to="/register" style={{
            padding: "1rem 2.5rem",
            background: "#004d40",
            color: "#fff",
            borderRadius: "3rem",
            fontSize: "1.1rem",
            fontWeight: "600",
            display: "inline-block",
            boxShadow: "0 10px 15px -3px rgba(0, 77, 64, 0.3)"
          }}>
            Get Started for Free
          </Link>
        </div>
        
        <div style={{ position: "relative", overflow: "hidden", padding: "1rem" }}>
          <div style={{
            background: "#f0fdfa",
            borderRadius: "3rem",
            padding: "2rem",
            transform: "rotate(3deg)",
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            zIndex: -1
          }}></div>
          <img 
            src="/home.jpg" 
            alt="Student studying" 
            style={{ 
              width: "100%", 
              borderRadius: "2.5rem",
              boxShadow: "20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff"
            }} 
          />
        </div>
      </div>
    </div>
  );
}
