import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import useFirebase from '../../hooks/useFirebase'
import Swal from 'sweetalert2'
import './Form.css'



const Form = ({total, compra}) => {
        // const [ error, setError ] = useState({})

    const { getTicket } = useFirebase()
    const { limpiarCarrito, validarFormulario } = useContext(CarritoContext)
    const [formData, setFormData] = useState({        
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
        // total: total,
        // items: compra,
        });




        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }

        // const {
        //     comprador: { email, nombre, apellido, telefono },
        // } = formData;

        
        const onSubmit = (e) => {
            e.preventDefault();
            console.log("form", formData.nombre)
            if (validarFormulario([formData.nombre, formData.apellido, formData.mail, formData.telefono])) {
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

    // //-------------------REVISAR------------

    // return (
    //     <form  onSubmit={onSubmit} className="container border">
    //         <h3 className="text-uppercase text-center my-4">Datos del comprador</h3>
    //         {Object.keys(form.comprador).map((key,index) => (
    //             <Input
    //             key={index}
    //             className="mb-3"
    //             type="text"
    //             name={`${key}`}
    //             value={key.value}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             inputClassName={`form-control ${error[key] && "is-invalid"}`}
    //             placeholder={`${key}`}
    //             error={error}
    //             />
    //         ))}
    //         <div className="flex flex-col gap-8">
    //             <div className="col-12 col-lg-9">
    //                 <p className="fs-4 text-uppercase">total</p>
    //             </div>
    //             <div className="col-12 col-lg-3">
    //                 <p className="fs-4">${total}</p>
    //             </div>
    //             <button
    //             type="submit"
    //             className="btn btn-primary text-uppercase w-100 my-4"
    //             >
    //             terminar la compra
    //             </button>
    //         </div>

    //         <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">
    //             volver a comprar
    //         </Link>
    //     </form>
    return (
    <>
        
        <form className='form__cart' onSubmit={onSubmit}>
        <h4>Formulario de compra</h4>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="telefono"
                placeholder="Telefono"
                value={formData.telefono}
                onChange={handleChange}
            />
            <button className='btn__cart' type="submit">Terminar compra</button>
            <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">Volver a comprar</Link>
        </form>
    </>
    );
    
}

export default Form