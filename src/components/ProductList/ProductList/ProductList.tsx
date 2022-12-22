import React from 'react';
import Product from "../../Product/Product";

// let products = arr.map(
//     (item:
//          {
//             title: string,
//             price: number,
//             category: string ,
//             image: string
//          } => {
//         return (
//             <Product
//                 title={item.title}
//                 price={item.price}
//                 category={item.category}
//             />)
//     }))

function ProductList() {
    return (
        <div className='product-list'>
            {products}
        </div>
    );
}

export default ProductList;