import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import api from '../../services/api'
import {ProductList} from './styles'

export default function Main() {
    const [products, setProducts] = useState([])

    //Carregar produtos API
    useEffect(() => {
        async function loadProducts() {
            const response  = await api.get('/products')
    
            setProducts(response.data.docs)
            
        }
    loadProducts()
    }, [])

    

    return (
        <>
            <Header/>
            <ProductList>
                    {
                        products.map(product => (
                            <li key={product._id}>
                                <strong>{product.title}</strong>
                                <p>{product.description}</p>

                                <a href="">Detalhes</a>
                            </li>
                            
                        
                        ))
                    }    
            </ProductList>
        </>
    )
}