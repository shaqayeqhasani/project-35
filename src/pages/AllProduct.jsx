import React, { useState, useEffect } from 'react';
import Pcart from '../components/Pcart';

export default function AllProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('https://my.api.mockaroo.com/myapi.json?key=cacce8a0')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container-fluid p-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-3">
            <Pcart
              title={product.title}
              rate={product.rate}
              pic={product.pic}
              pprice={product.pprice}
              nprice={product.nprice}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
