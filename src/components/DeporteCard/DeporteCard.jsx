/* 7️⃣ *** COMPONENTE DeporteCard *** 7️⃣

Implementar el componente DeporteCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un deporte específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './deporteCard.css';
import React from 'react';
import * as actions from "./../../redux/actions/index"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const DeporteCard = (props) => {
   const dispatch = useDispatch();
   const deletSubmit = ()=>{
      dispatch(actions.deleteDeporte(id));   
   }
   const{nombre,imagen,lugar_de_origen,id} = props
   return <div className='card'>
      <button onClick={deletSubmit}>x</button>
      <h3>{nombre}</h3>
      <img src={imagen} alt={nombre} />
      <p>Origen: {lugar_de_origen}</p>
      <Link to={`/deportes/${id}`}>{nombre}</Link>
   </div>;
};

export default DeporteCard;
