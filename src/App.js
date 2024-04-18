import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="App">
       <h4>Mi contador</h4>

       <p>Contador: {contador}</p>

       <button onClick={ () => setContador(contador+1)} > Incrementar</button>
       <button onClick={ () => setContador(0)} > Resetear</button>
       <button onClick={ () => setContador(contador-1)} > Decrementar</button>
    
    </div>
  );
}

export default App;
