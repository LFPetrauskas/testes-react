import React from 'react';

import './App.css';
import Familia from './Familia';
import Membro from './Membro';

function App() {
  return (
    <div className="App">
      <Familia sobrenome="Oliveira">
        <Membro nome="João" />
        <Membro nome="Maria" />
      </Familia>
    </div>
  );
}

export default App;
