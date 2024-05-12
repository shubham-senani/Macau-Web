import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>&copy; 2024 Macau. All rights reserved.</p>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
