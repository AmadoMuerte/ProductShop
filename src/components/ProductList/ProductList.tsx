import React, {useEffect, useState} from 'react';
import Product from "../Product/Product";
import axios from "axios";
import './ProductList.css'
function ProductList() {

      let [products, setProducts] = useState([])

    useEffect( () => {
        const getProducts =  async () => {
            await axios.get('https://fakestoreapi.com/products')
                .then ((response: any) => {
                    setProducts(response.data)

                })
        }
        getProducts()
    }, [])

    let createProductList =
              products.map(
                  (item: {
                      title: string,
                      price: number,
                      category: string ,
                      image: string
                  }) => {
                      return (
                          <Product
                              title={item.title}
                              price={item.price}
                              category={item.category}
                              image={item.image}
                          />)
                  })

    return (
        <div className='product-list'>
            {createProductList}
        </div>
    )
}

export default ProductList;