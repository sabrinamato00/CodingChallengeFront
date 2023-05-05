import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="pFooter">Seguinos en:</p>
      <div className="redesSociales">
        <nav className="redesFooter">
          <img src="./Img/logoFB.png" alt="" className="logoRedes" />
          <img src="./Img/logoIG.png" alt="" className="logoRedes" />
          <img src="./Img/logoTW.png" alt="" className="logoRedes" />
          <img src="./Img/logoTikTok.png" alt="" className="logoRedes" />
        </nav>
        <nav className="menuFooter">
          <li>
            <ol>Quiénes somos</ol>
            <ol>Politicas de privacidad</ol>
            <ol>Politicas de devoluciónes</ol>
            <ol>Términos y condiciones</ol>
            <ol>Preguntas frecuentes</ol>
            <ol>Trabajá con nosotros</ol>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
