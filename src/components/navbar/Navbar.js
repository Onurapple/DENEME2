import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar1">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  For You
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light">Vlog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light">Contact</a>
              </li>
            </ul>
    </div>
  );
}

export default Navbar;
