/* 6️⃣ *** COMPONENTE CreateDeporte *** 6️⃣

Implementar el componente CreateDeporte. Este consistirá en un formulario controlado con estados de React.
📢¡Sigue las instrucciones de los TEST!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗A fines practicos el input de ligas destacadas será solo un string y será nombra liga destacada.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from 'react';
import * as actions from "./../../redux/actions/index";
import { useDispatch } from 'react-redux';

     function validate(input){
      let error ={};
      
      if(input.nombre.length > 30){
            error.nombre = "Nombre demasiado largo";
        }
        if(input.descripcion.length < 100){
            error.descripcion = "Descripción demasiada corta";
        }
        if(input.reglas.length < 50){
            error.reglas = "El texto de las reglas deben ser más largas";
        }
        return error;
      }


const CreateDeporte = () => {

          
const [input, setInput] = React.useState({nombre: '',descripcion: '',imagen: '',reglas: '',equipamiento: '',lugar_de_origen: '',liga_destacada: '',
});

const [error, setError] = React.useState({});      


const handleChange = (event)=>{
      setInput({...input,
               [event.target.name]: event.target.value});
      
      setError(validate({...input,
            [event.target.name]: event.target.value}));         
};

const dispatch = useDispatch();

const handleSubmit = (event)=>{
      event.preventDefault();   
      if(Object.keys(error).length === 0){
            dispatch(actions.createDeporte(input));
      }      
                
      setInput({nombre: '',descripcion: '',imagen: '',reglas: '',equipamiento: '',lugar_de_origen: '',liga_destacada: ''
      });

      
}

   return <>
          <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input type="text" name='nombre' value={input.nombre} onChange={handleChange}/>
            {error.nombre && <p>{error.nombre}</p>}

            <label >Descripción: </label>
            <textarea name="descripcion" value={input.descripcion} onChange={handleChange}></textarea>
            {error.descripcion && <p>{error.descripcion}</p>}

            <label >Reglas: </label>
            <input type="number" name='reglas' value={input.reglas} onChange={handleChange}/>
            {error.reglas && <p>{error.reglas}</p>}

            <label >Imagen: </label>
            <input type="text" name='imagen' value={input.imagen} onChange={handleChange}/>
            <label >Equipamiento: </label>
            <input type="text" name='equipamiento' value={input.equipamiento} onChange={handleChange}/>
            <label >Lugar de origen: </label>
            <input type="text" name='lugar_de_origen' value={input.lugar_de_origen} onChange={handleChange}/>
            <label >Liga destacada: </label>
            <input type="text" name='liga_destacada' value={input.liga_destacada} onChange={handleChange}/>
            
            <button type='submit'>Crear deporte</button>
            
          </form>
   </>;
};

export default CreateDeporte;
