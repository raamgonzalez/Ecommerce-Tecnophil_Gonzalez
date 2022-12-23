import React from 'react'
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';
import './styles/ItemListContainer.css'
import '../Global/Layout/Layout.css'


const ItemListContainer = () => {
	const {id} = useParams();

    return ( 
		<ItemList item ={ id }/>
    )
}

export default ItemListContainer