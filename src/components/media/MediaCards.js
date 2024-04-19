import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const MediaCards = (props) => {

    const { media } = props;
    return (

  <div className="col">
    <div className="card">
      <img src={media.portada} className="card-img-top" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">{`${media.titulo}`}</h5>
        <p className="card-text">{` ${media.sinopsis}`}</p>
        <p className="card-text">{`Genero: ${media.genero.nombre}`}</p>
        <p className="card-text">{`Director: ${media.director.nombre}`} </p>
        <p className="card-text">{`Productora: ${media.productora.nombre}`} </p>
        <p className="card-text">{`Tipo Multimedia: ${media.tipo.nombre}`} </p>
          <Link>Ver</Link>

      </div>
    </div>
  
  
</div>

)


}