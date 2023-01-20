import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'
import useFirebase from '../hooks/useFirebase'
import Swal from 'sweetalert2'



const Form = ({total, compra}) => {
        // const [ error, setError ] = useState({})

    const { getTicket } = useFirebase()
    const { limpiarCarrito, validarFormulario } = useContext(CarritoContext)
    const [formData, setFormData] = useState({        
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            mensaje: '',
        // total: total,
        // items: compra,
        });

        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }

        const onSubmit = (e) => {
            e.preventDefault();
            console.log("form", formData.nombre)
            if (validarFormulario([formData.nombre, formData.apellido, formData.mail, formData.telefono, formData.mensaje])) {
                Swal.fire({
                title: "Oops!",
                text: "Faltan campos por completar",
                icon: "error",
                });
                return;
            }
            Swal.fire({
                title: "Genial!",
                text: `Su orden de compra se genero correctamente!`,
                timerProgressBar: true,
                showConfirmButton: true, 
                confirmButtonText: 'Ver orden de compra',
                // timer: 5000,
                icon: "success",
            });
            getTicket({ datos: formData });
            limpiarCarrito();
        };
    

    // const handleBlur = (e) => {
    //     const { name, value } = e.target;
    //     if (value === "") {
    //         setError({ ...error, [name]: "Este campo es obligatorio" });
    //         return;
    //     }
    //     setError({});
    // };
    
    return (
    <>
        <form className='form__cart' onSubmit={onSubmit}>
            <input
                className='form__text'
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="text"
                name="telefono"
                placeholder="Telefono"
                value={formData.telefono}
                onChange={handleChange}
            />
            <textarea
                className='form__text'
                type="text"
                name="mensaje"
                placeholder="Escriba su mensaje"
                value={formData.mensaje}
                onChange={handleChange}
            />
            <button className='btn__cart' type="submit">Terminar compra</button>
            <Link to="/" className="btn__volver">Volver a comprar</Link>
        </form>
    </>
    );
}

export default Form