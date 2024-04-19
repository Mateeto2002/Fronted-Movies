import { axiosInstance } from '../helper/apis.config';



const ObtenerDirectores = () => {
    return axiosInstance.get('director', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

const crearDirector = (data) => {

    return axiosInstance.post('director', data,   {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

const editarDirector = (directorID, data,) => {

    return axiosInstance.post(`director/${directorID}`, data,   {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}
export{

    ObtenerDirectores, crearDirector, editarDirector
}