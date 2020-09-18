import React from 'react';

const Imagen = (props) =>{

    const {thumbnail, title, price} = props.imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={thumbnail} alt={title} className="card-img-top"/>
                <div className="card-body">
                <p className="card-text">{price}Precio</p>
                <p className="card-text">{title}Titulo</p>

                <a href={thumbnail} target="_blank" className="btn btn-primary btn-block">Ver articulo</a>
                </div>
            </div>
        </div>
    )

}

export default Imagen;