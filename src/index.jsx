// Creando el punto de entrada
// importamos react
import React from 'react';
// importamos solo el elemento render de react-dom ya q es el unico a usar
import { render } from 'react-dom';

// Clase 1: creamos una clase de prueba
// class Test extends React.Component {
//   // con render devolvemos un elemente JSX
//   render(){
//     return (
//       <h1>Reacttr</h1>
//     )
//   }
// }

import App from './components/App'

// Le indicamos donde encajar el HTML
render(<App />, document.getElementById('root'));
