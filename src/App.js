import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
//Patlabor asd asfasfasf
class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina: ''
 
  }

  paginaAnterior = () =>{
     // Leer el state de la pagina
     let pagina = this.state.pagina;

    //Si estamos en la pagina 1 dejar de restar
    if(pagina == 0) return null;
     //Sumar uno a la pagina actual
     pagina -= 50;
     //Agregar cambio al state
     this.setState({
       pagina
     }, () => {
       this.consultarApi();
     });
     console.log(pagina);
  }

  paginaSiguiente = () =>{
    // Leer el state de la pagina
    let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
    pagina += 50;
    //Agregar cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });
    console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina;
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${termino}&offset=${pagina}`;
    
    console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.results }) )

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 0
    }, () => {
      this.consultarApi();
    })
  }

 render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Page Shop</p>
        <Buscador 
          datosBusqueda={this.datosBusqueda} //Dato desde el componente principal al hijo que lo recibe con props
        />
      </div> 
      <div className="row justify-content-center">
        <Resultado
        imagenes = {this.state.imagenes}
        paginaAnterior={this.paginaAnterior}
        paginaSiguiente={this.paginaSiguiente}
      />
      </div>
    </div>
  );
 }
}

export default App;
