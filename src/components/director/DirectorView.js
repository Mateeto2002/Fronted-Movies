import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { crearDirector } from "../../services/directorService"
import { Header } from "../ui/Header"

export const DirectorView = () => {

  const [valoresForm, setValoresForm] = useState([]);
  const { nombre, estado  } = valoresForm;
  
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value })
}

const handleOnSubmit = async (e) => {
  e.preventDefault();

  const director = {
      nombre, estado
  }

  console.log(director);
  try {
      Swal.fire({
          allowOutsideClick: false,
          text: 'cargando'
      });
      
      const { data } = await crearDirector(director);
      
      
  

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
                        <h3>Nuevo Inventario</h3>
                        
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
                                <label className="form-label">estado</label>
                                <input type="text" name='estado'
                                required
                                value={estado}
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


