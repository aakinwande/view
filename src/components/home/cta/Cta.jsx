import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div class="container-fluid cta">
      <h4>We’re ready to meet if you have books in you, <br />Your business deserves exponential growth or you 
have a brand the world must know. </h4>
<a
                  href="https://calendly.com/kalukalu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
      <button className="btn-cta">LET'S MEET</button>
      </a>
    </div>
  );
};

export default Cta;

// style={{fontSize: '24px', paddingRight: '82px', paddingLeft: '82px' }}
