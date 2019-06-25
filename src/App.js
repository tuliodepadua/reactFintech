import React from 'react';
import Estrutura from './organisms/home';
import './App.scss';
import './materialize-css/dist/css/materialize.min.css';
import Aplicacao from './styles'

function App() {
  return (
    <Aplicacao className="App">
      <Estrutura />
    </Aplicacao>
  );
}

export default App;