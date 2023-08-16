import React, { useState } from "react";
import KickLogo from "../../../src/images/KickLogo/KickLogo.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect
      expand="lg"
      className="navbar-container"
    >
      <Navbar.Brand href="#home">
        <img
          src={KickLogo}
          width="300"
          height="80"
          className="d-inline-block align-top"
          alt="Company Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={
          expanded ? "navbar-toggler-custom active" : "navbar-toggler-custom"
        }
      >
        <span className="navbar-toggler-icon"></span>
        <span className="close-icon">×</span>
      </Navbar.Toggle>
      <Navbar.Collapse className="all-navbar" id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbar-items" href="/">HOME</Nav.Link>
          <NavDropdown className="navbar-items" title="SERVICES" id="collapsible-nav-dropdown">
            <div className="services-dropdown-content">
              <div className="service-section">
                <NavDropdown.Item className="service-drophead" href="/ghostwriting">Professional Ghostwriting</NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/business-books">
                Business Books
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/memoir-autobiography">
                Memoir/Autobiography
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/general-nonfiction">
                General Nonfiction
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/self-help">
                Self-help
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/fiction">
                Fiction
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/childrens">
                Children’s
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/social-media">
                Social Media
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/speeches">
                Speeches
                </NavDropdown.Item>
              </div>
              <div className="service-section">
                <NavDropdown.Item className="service-drophead" href="/copywriting">Professional Copywriting</NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/sales-funnel-scripts">
                Sales funnel scripts
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/email-campaign">
                Email campaign
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/thought-leadership-articles">
                Thought leadership articles
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/sales-call-scripts">
                Sales call scripts
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/website-content">
                Website content
                </NavDropdown.Item>
              </div>
              <div className="service-section">
                <NavDropdown.Item className="service-drophead" href="/marketing">Marketing and Public Relations</NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/brand-content-strategy">
                Brand content strategy
                </NavDropdown.Item>
                <NavDropdown.Item className="service-dropdetails" href="/personality-public-image">
                Personality public image
                </NavDropdown.Item>
              </div>
            </div>
          </NavDropdown>
          <Nav.Link className="navbar-items" href="/blog">BLOG</Nav.Link>
          <Nav.Link className="navbar-items" href="/contact-us">CONTACT</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#instagram" className="nav-link-with-bg">
            <FaInstagram className="social-icon" />
          </Nav.Link>
          <Nav.Link href="#twitter" className="nav-link-with-bg">
            <FaTwitter className="social-icon" />
          </Nav.Link>
          <Nav.Link href="#facebook" className="nav-link-with-bg">
            <FaFacebookF className="social-icon" />
          </Nav.Link>
          <Nav.Link
            href="mailto:info@kickandcosynergy.com"
            className="nav-link-with-bg"
          >
            <FaEnvelope className="social-icon" />
          </Nav.Link>
          <Nav.Link href="#phone" className="nav-link-with-bg">
            <FaPhone className="social-icon" />
          </Nav.Link>
          <Nav.Link
            href="http://www.linkedin.com/company/kick-co-synergy-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-with-bg"
          >
            <FaLinkedin className="social-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;