import React from 'react';
import ProductCard from './controls/ProductCard';
import PromotionAccordians from './controls/PromotionAccordians';
import './Products.css';


const Products = ({ onUpdateCount, trolleys }) => {
  return (
    <div>
      <div className="main">
        <h1>Beers </h1><h3>(Most Popular)</h3>
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