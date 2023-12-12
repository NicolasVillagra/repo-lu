/* 8️⃣ ***COMPONENTE DeporteDetail*** 8️⃣

Implementar el componente DeporteDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del deporte.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del deporte cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del deporte correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import './deporteDetail.css';
import React from 'react';
import * as actions from "./../../redux/actions/index"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const DeporteDetail = (props) => {
      const {id} = useParams()
      const dispatch = useDispatch()
      React.useEffect(()=>{
            dispatch(actions.getDeporteDetail(id))

      },[id], dispatch)
      const state = useSelector((state)=> state.deporteDetail);


      
   return <div className='detail'>
      {state?.nombre && (
            <div>
            <h1>{state.nombre}</h1>
            <img src={state.imagen} alt={state.nombre} />
            <h3>Descripcion: {state.descripcion}</h3>
            <h5>Reglas: {state.reglas}</h5>
            <h5>Equipamiento: {state.equipamiento}</h5>
            <h5>Origen: {state.lugar_de_origen}</h5>
            <h5>Ligas destacadas: {state.ligas_destacadas}</h5>
      </div>
      )}
   </div>;
};

export default DeporteDetail;
