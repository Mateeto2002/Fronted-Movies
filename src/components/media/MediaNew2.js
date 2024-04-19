import React, { useState, useEffect } from "react";
import { ObtenerDirectores } from "../../services/directorService";
import { ObtenerGeneros } from "../../services/generoSerevice";
import { ObtenerProductoras } from "../../services/productoraService";
import { ObtenerTipos } from "../../services/tipoService";
import { crearMedias } from "../../services/mediaService"
import Swal from 'sweetalert2';
import { listarMedias } from "../../services/mediaService";


export const MediaNew2 = ({ handleOpenModal, listarMedias}) => {

    const [directores, setDirectores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);

    const [valoresForm, setValoresForm] = useState([]);
    const { serial, titulo, sinopsis, url, portada,
        estreno, genero, director, productora, tipo } = valoresForm;

    const listarGeneros = async () => {

        try {
            const { data } = await ObtenerGeneros();
            setGeneros(data);
        } catch (error) {
            console(error);
        }
    }

    useEffect(() => {
        listarGeneros();
    }, []);

    const listarDirectores = async () => {

        try {
            const { data } = await ObtenerDirectores();
            setDirectores(data);
        } catch (error) {
            console(error);
        }
    }

    useEffect(() => {
        listarDirectores();
    }, []);

    const listarTipos = async () => {

        try {
            const { data } = await ObtenerTipos();
            setTipos(data);
        } catch (error) {
            console(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);

    const listarProductoras = async () => {

        try {
            const { data } = await ObtenerProductoras();
            setProductoras(data);
        } catch (error) {
            console(error);
        }
    }

    useEffect(() => {
        listarProductoras();
    }, []);

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value })
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const media = {
            serial, titulo, sinopsis, url, portada,
            estreno,
            genero: {
                _id: genero
            }, director: {
                _id: director
            }, productora: {
                _id: productora
            }, tipo: {
                _id: tipo
            }
        }
        console.log(media);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'cargando'
            });
            Swal.showLoading();
            const { data } = await crearMedias(media);
            handleOpenModal();
            listarMedias();
        

        } catch (error) {
            console.log(error);
            Swal.close();
        }
    }

    return (
        <div className="sidebar">
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar-header">
                        <h3>Nueva pelicula o serie</h3>
                        <i className="fa-solid fa-xmark" onClick={handleOpenModal} ></i>
                    </div>
                    <form onSubmit ={(e) => handleOnSubmit(e)} > 
                        <div className="formulario">
                            <p className="subtitulo">  Ingresa la nueva Media</p>
                            <div className="contenedor-form">

                                <label className="label-form">Serial: </label>
                                <input
                                    className="input-form"
                                    name="serial"
                                    type="text"
                                    value={serial}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>

                            <div className="contenedor-form">

                                <label className="label-form">Titulo: </label>
                                <input
                                    className="input-form"
                                    name="titulo"
                                    type="text"
                                    value={titulo}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>

                            <div className="contenedor-form">

                                <label className="label-form">Sinopsis:</label>
                                <input
                                    className="input-form"
                                    name="sinopsis"
                                    type="text"
                                    value={sinopsis}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>

                            <div className="contenedor-form">

                                <label className="label-form">Imagen: </label>
                                <input
                                    type="url"
                                    className="input-form"
                                    name="portada"
                                    value={portada}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>
                            <div className="contenedor-form">

                                <label className="label-form">Url: </label>
                                <input
                                    type="url"
                                    className="input-form"
                                    name="url"
                                    value={url}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>

                            <div className="contenedor-form">

                                <label className="label-form">Estreno</label>
                                <input
                                    type="date"
                                    className="input-form"
                                    name="estreno"
                                    value={estreno}
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>







                            <div className="Contenerdor-form2">
                                <p className="subtitulo" >Selecciona: </p>
                                <div className="label-form-selector">

                                    <div className="label-form2">
                                        <label>Genero</label>
                                    </div>
                                    <div className="label-form2">
                                        <label>Director</label>
                                    </div>
                                </div>

                                <div className="input-form-selector">

                                    <div className="container-input-form2">
                                        <select
                                            className="input-form2"
                                            name="genero" required
                                            value={genero}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                            <option value="">Seleccionaa</option>
                                            {
                                                generos.map(({ _id, nombre }) => {
                                                    return <option key={_id} value={_id}>{nombre}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="container-input-form2">
                                        <select
                                            className="input-form2"
                                            name="director" required
                                            value={director}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                            <option value="">Seleccionaa</option>
                                            {
                                                directores.map(({ _id, nombre }) => {
                                                    return <option key={_id} value={_id}>{nombre}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>


                                <div className="label-form-selector">

                                    <div className="label-form2">
                                        <label>Productora</label>
                                    </div>
                                    <div className="label-form2">
                                        <label>Tipo Multimedia</label>
                                    </div>

                                </div>


                                <div className="input-form-selector">

                                    <div className="container-input-form2">
                                        <select className="input-form2"
                                            name="productora" required
                                            value={productora}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                            <option value="">Seleccionaa</option>

                                            {
                                                productoras.map(({ _id, nombre }) => {
                                                    return <option key={_id} value={_id}>{nombre}</option>


                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="container-input-form2">
                                        <select
                                            className="input-form2"
                                            name="tipo" required
                                            value={tipo}
                                            onChange={(e) => handleOnChange(e)}
                                        >
                                            <option value="">Seleccionaa</option>

                                            {
                                                tipos.map(({ _id, nombre }) => {
                                                    return <option key={_id} value={_id}>{nombre}</option>


                                                })
                                            }

                                        </select>
                                    </div>

                                </div>

                            </div>
                            <button className="Boton">  Guardar </button>








                        </div>
                    </form>


                </div>

            </div>


        </div>
    )


}