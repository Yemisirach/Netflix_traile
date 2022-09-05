import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href="#">Audio Description</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
          <li className="service-code">
            <a href="#">Service Code</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Gift Cards</a>
          </li>

          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <li className="net">
        <a href="#">
          1997-2022 Netflix,Inc.{"51779d41-a293-4c43-80af-c268476307"}
        </a>
      </li>
      <h1 className="myName">
        Built By: <a href="https://www.yemisrach21.com/">Yemisirach Tamirat</a>
      </h1>
    </div>
  );
}

export default Footer;
