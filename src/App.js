import React, { Component } from 'react';

import './App.css';

import Lista from './componentes/lista/lista' ;
import Filtro from './componentes/filtro/filtro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filtro/>
        <Lista/>
      </div>
    );
  }
}

export default App;
