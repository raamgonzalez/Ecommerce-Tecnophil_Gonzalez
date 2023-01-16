import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../services';
import Swal from 'sweetalert2'

const useFirebase = () => {

const [productos, setProductos] = useState([])
const [producto, setProducto] = useState(null)
const [loading , setLoading] = useState(false)

useEffect(() => {
    getProducts()

    return () => {
    }
}, [])

useEffect(() => {

}, [productos])


const getProducts = async () => {

    try {
        setLoading(true)
        const prodCol = collection(db,'productos')
        await getDocs(prodCol).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('Base de datos esta vacio')
            }
            setLoading(false)
            setProductos(snapshot.docs.map((doc) =>  {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            }))
        })
    } catch (error) {
        console.log(error)
    }
}

const getProduct =  async (id) => {

    try {
        setLoading(true)
        const document = doc(db,"productos",id)
        const response = await getDoc(document)
        setProducto({id:response.id,...response.data()})
        setLoading(false)
    } catch (error) {
        console.log(error)
    }

};

const getTicket = async({datos}) => {
    try {
        const col = collection(db, "ordenes")
        const order = await addDoc(col, datos)
        return (
            setTimeout(() => {
                Swal.fire({
                    title: "Genial!",
                    text: `Su orden es ${order.id}`,
                    icon: "success",
                    timerProgressBar: true,
                })
            }, 2000));
    } catch (error) {
        console.log(error)
    }
}




    return {
        loading,
        productos,
        producto,
        getProducts,
        getProduct,
        getTicket
    }
}

export default useFirebase