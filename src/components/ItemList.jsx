import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Item from './Item';
import useFirebase from '../hooks/useFirebase';

const ItemList = () => {


    // const [cards, setCards] = useState([])
	const {categoria} = useParams()
	const {productos, loading} = useFirebase()  
	const filter = categoria? productos.filter((product) => product.category === categoria ) : productos


    return ( 
    <section className='products'>
        {productos.length < 1}
        {loading && <Spinner/>}
        <div className="products__container">
            { !loading &&  productos.length > 0 ? filter.map(({id, title, description, price, offer, img, alt, stock},index) => (
                <Item
                id={id}
                key={id}
                title={title} 
                description={description} 
                price={price}
                img={img}
                alt={alt}
				stock={stock}
                offer={offer}
                />) 
                ) : !loading && productos.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
            }
        </div>
        {/* <Title greeting= 'Listado de productos'/> */}
	</section>
    )
}

export default ItemList