import React from "react";
import "./PublicacionesRecientes.css";

function PublicacionesRecientes() {
  return (
    <>
      <h1 className="tituloPubliRecientes">Publicaciones recientes</h1>
      <div className="publicacionesRecientes">
        <div className="cardPublicacion">
          <img src="./Img/Publi1.png" alt="" />
          <h2>Less new</h2>
          <p>
            Reduce, reutiliza y recicla. Juntos podemos hacer la diferencia para
            cambiar el planeta.
          </p>
          <button>Leer más</button>
        </div>
        <div className="cardPublicacion">
          <img src="./Img/Publi2.png" alt="" />
          <h2> Ferias circulares</h2>
          <p>
            Compra productos locales, sostenibles y éticos. Haz un cambio
            positivo hoy mismo!
          </p>
          <button>Leer más</button>
        </div>
        <div className="cardPublicacion">
          <img src="./Img/Publi3.png" alt="" />
          <h2>Sustentabilidad</h2>
          <p>
            Empoderate para cuidar el planeta. Pequenas acciones diarias pueden
            tener un gran impacto.
          </p>
          <button>Leer más</button>
        </div>
      </div>
    </>
  );
}

export default PublicacionesRecientes;
