import React from 'react'
import { useParams } from 'react-router-dom';

import ItemsList from './ItemsList';
import './styles/ItemListContainer.css'
import '../Global/Layout/Layout.css'


const ItemListContainer = () => {
	const {id} = useParams();

    return ( 
		<ItemsList item ={ id }/>
    )
}

export default ItemListContainer