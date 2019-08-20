import React from 'react';

import './App.css';
// import Familia from './Familia';
// import Membro from './Membro';
import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <Contador numero={1} />
      {/* <Familia sobrenome="Oliveira">
        <Membro nome="João" />
        <Membro nome="Maria" />
      </Familia> */}
    </div>
  );
}

export default App;
