import React from "react";
import Footer from "./Footer";
import "./SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="sobreNosotros">
      <img
        src="./Img/SobreNosotros1.png"
        alt="SobreNosotros1"
        className="sobreNosotros1"
      />
      <h1 className="tituloSobreNosotros">
        Conoce quiénes somos y nuestra misión en la moda circular
      </h1>
      <div className="infoSobreNosotros">
        <p>
          ¡Hola! Bienvenidos a nuestra tienda de moda circular. Te contaremos un
          poco sobre nosotros y nuestra misión. <br /> <br /> Somos un equipo
          apasionado por la moda sostenible y consciente de que la moda tiene un
          impacto significativo en el medio ambiente. Decidimos abrir esta
          tienda de segunda mano con el objetivo de contribuir a la reducción de
          la huella ambiental de la industria de la moda y fomentar un consumo
          responsable y ético. <br /> <br /> En nuestra tienda encontrarás
          prendas de segunda mano de alta calidad, seleccionadas cuidadosamente
          para garantizar su durabilidad y estilo atemporal. Además, ofrecemos
          una amplia variedad de estilos y tallas, para que todas y todos puedan
          encontrar algo que les guste. <br /> <br />
          Nos importa la satisfacción de nuestros clientes, por lo que nos
          aseguramos de que cada compra sea una experiencia positiva y sin
          complicaciones. <br /> <br /> Creemos que la moda circular es el
          futuro y que cada vez más personas se están dando cuenta de la
          importancia de consumir de manera responsable. <br /> <br /> ¡Únete a
          nuestra comunidad de moda circular y ayúdanos a crear un futuro más
          sostenible y consciente!
        </p>
        <img
          src="./Img/SobreNosotros2.jpeg"
          alt="SobreNosotros2"
          className="sobreNosotros2"
        />
      </div>

      <div className="cartelSobreNosotros">
        <p className="texto2SobreNosotros">
          La moda circular nos brinda la oportunidad de transformar el
          desperdicio en recursos validosos, prolongando la vida útil de las
          prendas y ayudando a conservar los recursos naturales del planeta.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default SobreNosotros;
