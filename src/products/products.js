import React, { Component } from 'react';
import '../App.css';

class Products extends Component {

  constructor(props) {
     super(props);
     this.myHandleButton = this.myHandleButton.bind(this);
  }

  myHandleButton(event) {
    let product = this.props.state.products[event.target.id] 
    if(product!=null) {
        this.props.parentCallback(product)
    }
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div>
            <ul>
                {
                    this.props.state.products.map(product => (
                        <li key={product.id}>
                        <button onClick={this.myHandleButton}>
                            <span role="img" product={product} aria-label={product.name} id={product.id}>{product.emoji}</span>
                        </button>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    )
  }
}

export default Products; // Don’t forget to use export default!