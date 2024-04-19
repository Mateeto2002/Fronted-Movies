import { axiosInstance } from '../helper/apis.config';


const ObtenerTipos = () => {
    return axiosInstance.get('tipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const crearTipo = (data) => {

    return axiosInstance.post('tipo', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarTipo = (tipoID, data,) => {

    return axiosInstance.post(`tipo/${tipoID}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {

    ObtenerTipos, crearTipo, editarTipo}