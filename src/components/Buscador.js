import React, { Component } from 'react';

class Buscador extends Component {

busquedaRef = React.createRef(); //Nos permite leer los valores de los input con react

obtenerDatos = (e) =>{
    
    e.preventDefault();

    //Tomamos el valor del input
    console.log(this.busquedaRef.current.value);

    const termino = this.busquedaRef.current.value;

    //Lo enviamos al componente Principal
    this.props.datosBusqueda(termino);
}

    render() {  //Metodo obligatorio en cada componente, dice que se va a imprimir en el componente
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
               
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control 
                        form-control-lg" placeholder="Buscar productos.
                        Ejemplo: Celulares"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger 
                        btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;