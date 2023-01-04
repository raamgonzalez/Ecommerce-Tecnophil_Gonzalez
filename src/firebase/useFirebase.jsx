import { useState } from 'react'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const useFirebase = () => {

    const [products, setProducts] = useState

    const getProducts = async () => {

        try {
            const prodCol = collection('productos', db)
            await getDocs(prodCol).then((snapshot) => {
                if(snapshot.size === 0) {
                    console.log('Base de datos esta vacio')
                }
                setProducts(snapshot.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                }))
            })

        } catch (error) {
            
        }
    }

    return {products, getProducts}
}

export default useFirebase