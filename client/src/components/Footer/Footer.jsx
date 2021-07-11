import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer_Logo">
          <Link to="/">CoviConnect</Link>
        </div>
        <div className="footer_navLinks">
          <b>Web Navigation</b>
          <Link to="/">Home</Link>
          <Link to="/Coviconnect/CovidResource">Get Informed</Link>
          <Link to="/voluunteers/allVolunteers">Volunteers</Link>
          <Link to="/nog/allNgos">Ngos</Link>
        </div>
        <div className="footer__resources">
          <b>Resouces</b>
          <Link to="https://www.who.int/health-topics/coronavirus#tab=tab_2">
            WHO
          </Link>
          <Link to="https://www.cowin.gov.in/">Co-Win</Link>
          <Link to="https://www.covid19india.org/">covid19india.org</Link>
        </div>
      </div>
      <div className="gitHub">
        <i class="fab fa-github"></i>
        <a href="https://github.com/jit48/CoviConnect">
          git hub : Hackcovid 2.0
        </a>
      </div>
    </div>
  );
}

export default Footer;
