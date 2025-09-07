import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#282c34" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>Dashboard</Link>
      <Link to="/employees" style={{ color: "white", margin: "10px" }}>Employees</Link>
      <Link to="/payroll" style={{ color: "white", margin: "10px" }}>Payroll</Link>
      <Link to="/login" style={{ color: "white", margin: "10px" }}>Login</Link>

    </nav>
  );
}
