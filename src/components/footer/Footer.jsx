import React from "react";
import "./footer.css";
import KickLogo from "../../images/KickLogo/KickLogo.svg";
import { Nav } from "react-bootstrap";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div class="container-footer">
        <div className="row">
          <h1 className="footer-head">Services</h1>
        </div>

        <div className="row-footer">
          <div className="col">
            <div className="row">
              <h4 className="footer-service">GHOSTWRITING</h4>
            </div>
            <div className="row">
              <a className="a-item" href="/businessbooks">
                Business Books
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/memoir-autobiography">
                Memoir/Autobiography
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/general-non-fiction">
                General Nonfiction
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/self-help">
                Self-help
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/fiction">
                Fiction
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/children">
                Children's
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/social-media">
                Social Media
              </a>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <h4 className="footer-service">COPYWRITING</h4>
            </div>
            <div className="row">
              <a className="a-item" href="/sales-funnel">
                Sales funnel scripts
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/email-campaign">
                Email campaign
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/sales-call">
                Sales call scripts
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/website-content">
                Website content
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/thought-leadership">
                Thought leadership articles
              </a>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <h4 className="footer-service">MARKETING AND PUBLIC RELATIONS</h4>
            </div>
            <div className="row">
              <a className="a-item" href="/brand-content">
                Brand content strategy
              </a>
            </div>
            <div className="row">
              <a className="a-item" href="/personal-public-image">
                Personality public image
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid details">
        <div className="row">
          <div className="col">
            <img src={KickLogo} className="footer-logo-img"alt="kicklogo"  />
          </div>
          <div className="col">
            <div className="row-details">
              <p className="footer-address">
                {" "}
                Plot 2450 Cadastral Zone E27 Apo Resettlement Abuja
              </p>
            </div>
          </div>
          <div className="col">
            <div className="row-details">
              <div>
                 <a className="row-link-1" href="tel:+2347039365403">
                +234 70-393-65403
              </a>
              </div>
              <div>
                 <a className="row-link-2" href="mailto:info@kickandcosynergy.com">
              info@kickandcosynergy.com
            </a>
              </div>
             
            </div>
           
          </div>
          <div className="col">
            <Nav className="ml-auto social-icons-container">
              <Nav.Link href="#instagram" className="nav-link-with-bg">
                <FaInstagram className="social-icon" />
              </Nav.Link>
              <Nav.Link href="#twitter" className="nav-link-with-bg">
                <FaTwitter className="social-icon" />
              </Nav.Link>
              <Nav.Link href="#facebook" className="nav-link-with-bg">
                <FaFacebookF className="social-icon" />
              </Nav.Link>
              <Nav.Link href="#email" className="nav-link-with-bg">
                <FaEnvelope className="social-icon" />
              </Nav.Link>
              <Nav.Link href="#phone" className="nav-link-with-bg">
                <FaPhone className="social-icon" />
              </Nav.Link>
              <Nav.Link href="#linkedin" className="nav-link-with-bg">
                <FaLinkedin className="social-icon" />
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>

      <div className="container-fluid rights">
        <div className="row">
          <div className="col">
            <p className="rights-footer">
              &copy; 2023 Kick and Co. All rights reserved.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="rights-name">
              Built by{" "}
              <span className="rights-alameen">Al-ameen Akinwande</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
