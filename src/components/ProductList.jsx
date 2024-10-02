import React from 'react'

function ProductList({products}) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} width="100"/>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
