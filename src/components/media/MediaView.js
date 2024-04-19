import React, { useEffect, useState } from 'react';
import { obtenerMedias } from '../../services/mediaService';
import { MediaCards } from './MediaCards';
import { MediaNew2 } from './MediaNew2';



export const MediaView = () => {

  const [medias, setMedias] = useState([]);
  const [openModal, setOpenModal] = useState(false); 

  const listarMedias = async () => {

    try {

      const { data } = await obtenerMedias();
      console.log(data);
      setMedias(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listarMedias();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


  return (
    <div className='container-fluid'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          medias.map((media) => {
            return <MediaCards key={media._id} media={media} />
          })
        }
      </div>
        {
          openModal ? <MediaNew2
          handleOpenModal = {handleOpenModal}
          listarMedias={listarMedias} />:
      <button type='button' className='btn btn-primary fab' onClick={ handleOpenModal} >
        <i className="fa-solid fa-plus"></i>
      </button>
      }
    </div>
  )

}
