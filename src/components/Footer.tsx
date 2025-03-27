import React from "react";
import "@/assets/css/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Left Side - Copyright */}
        <span className="copyright">&copy; 2025 All Rights Reserved</span>

        {/* Right Side - Name */}
        <span className="author">Parvinder Singh</span>
      </div>
    </footer>
  );
};

export default Footer;
