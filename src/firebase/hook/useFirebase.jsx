import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

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


    return {
        loading,
        productos,
        producto,
        getProducts,
        getProduct,
    }
}

export default useFirebase