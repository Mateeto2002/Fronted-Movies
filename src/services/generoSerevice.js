import { axiosInstance } from '../helper/apis.config';


const ObtenerGeneros = () => {
    return axiosInstance.get('genero', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const crearGenero = (data) => {

    return axiosInstance.post('genero', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarGenero = (generoID, data,) => {

    return axiosInstance.post(`genero/${generoID}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {

    ObtenerGeneros, crearGenero, editarGenero}