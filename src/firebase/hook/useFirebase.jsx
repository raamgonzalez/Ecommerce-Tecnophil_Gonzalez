import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';

const useFirebase = () => {

const [productos, setProductos] = useState([])
const [producto, setProducto] = useState(null)

useEffect(() => {
    getProducts()

    return () => {
    }
}, [])

useEffect(() => {

}, [productos])




const getProducts = async () => {

    try {
        const prodCol = collection(db,'productos')
        await getDocs(prodCol).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('base de datos esta vacio')
            }
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
        const document = doc(db,"productos",id)
        const response = await getDoc(document)
        setProducto({id:response.id,...response.data()})
    } catch (error) {
        console.log(error)
    }
};


    return {
        productos,
        producto,
        getProducts,
        getProduct,
    }
}

export default useFirebase