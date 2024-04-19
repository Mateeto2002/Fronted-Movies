import { axiosInstance } from '../helper/apis.config';


const obtenerMedias = () => {
    return axiosInstance.get('media', {
        headers: {
            'Content-Type': 'application/json'
            
        }
    })
}
const crearMedias = (data) => {

    return axiosInstance.post('media', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarMedias = (mediaID, data,) => {

    return axiosInstance.post(`media/${mediaID}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export {
     obtenerMedias, crearMedias, editarMedias}