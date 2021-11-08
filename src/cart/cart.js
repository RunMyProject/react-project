import React, { Component } from 'react';
import '../App.css';

class Cart extends Component {

  render() {
    return (
      <div>
        <h2>Cart ({this.props.products.length} products)</h2>
        <div>
            {
                this.props.products.map(product => (
                    <tr>
                        <td class="my-space" key={product.id}>
                            <span role="img" aria-label={product.name} id={product.id}>{product.emoji}</span>
                        </td>
                        <td class="my-space">
                            {product.name}
                        </td>
                        <td class="my-space">
                            {product.qty}
                        </td>
                    </tr>
                ))
            }
        </div>
      </div>
    )
  }
}

export default Cart; // Don’t forget to use export default!