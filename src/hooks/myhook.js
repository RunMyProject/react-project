import React, { useState, useEffect } from 'react';

export default function Myhook({state, parentCallback}) {

  const [idprod, setIdprod] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  
  useEffect(() => {

    // Update the document title using the browser API
//    document.title = `You ${state} clicked ${count} times`;

    if(idprod) {
      let product = state.products[idprod-1]
      if(product!=null) {
        parentCallback(product)
      }
    }    
  }, [idprod]);

  return (

    <div>
    <h1>Myhook   </h1>
    <div>
        <ul>
            {
                state.products.map(product => (
                    <li key={product.id}>
                      <button onClick={() => setIdprod(product.id+1)}>
                        <span role="img" product={product} 
                        aria-label={product.name} id={product.id}>{product.emoji}</span>
                      </button>

                    </li>
                ))
            }
        </ul>
    </div>
  </div>

  );
}