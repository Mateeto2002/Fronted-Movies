import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { crearTipo } from "../../services/tipoService"






export const TipoView = () => {
  const [valoresForm, setValoresForm] = useState([]);
  const { nombre, descripcion  } = valoresForm;



 

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value })
}

const handleOnSubmit = async (e) => {
  e.preventDefault();

  const tipo= {
      nombre, descripcion
  }

  console.log(tipo);
  try {
      Swal.fire({
          allowOutsideClick: false,
          text: 'cargando'
      });
      
      const { data } = await crearTipo(tipo);
      
      
  

  } catch (error) {
      console.log(error);
      Swal.close();
  }
}


  return (

   
     
    <div className=''> 
    
        <div className=''>
            <div className='row'>

                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Crear nuevo tipo de multimedia</h3>
                        
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr />
                    </div>
                </div>

                <form onSubmit ={(e) => handleOnSubmit(e)}>
                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" name='nombre'
                                required
                                value={nombre}
                                onChange={(e) => handleOnChange(e)}
                                className='form-control'
                                />
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Descripcion</label>
                                <input type="text" name='descripcion'
                                required
                                value={descripcion}
                                onChange={(e) => handleOnChange(e)}
                                className='form-control'
                                />
                            </div>
                        </div>
                        
                            
                        
                    </div>

                    <div className='row'>
                        <div className='col'>
                        <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  
  )
}


