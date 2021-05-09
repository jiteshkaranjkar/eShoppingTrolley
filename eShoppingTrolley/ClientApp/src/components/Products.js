import React from 'react';
import ProductCard from './controls/ProductCard';
import './Products.css';


const Products = ({ onUpdateCount, trolleys }) => {
  return (
    <div>
      <div className="main">
        <h1>Beers </h1><h3>(Most popular)</h3>
      </div>
      <div className="grid-container">
        {trolleys.map(trolley =>
          <div className="item" key={trolley.product.id} >
            <ProductCard key={trolley.product.id} shoppingItem={trolley} onUpdateCount={onUpdateCount} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;