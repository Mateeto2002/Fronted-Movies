import { axiosInstance } from '../helper/apis.config';


const ObtenerProductoras = () => {
    return axiosInstance.get('productora', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const crearProductora = (data) => {

    return axiosInstance.post('productora', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const editarProductora = (productoraID, data,) => {

    return axiosInstance.post(`productora/${productoraID}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export {

    ObtenerProductoras, crearProductora, editarProductora}