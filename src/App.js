import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './products/products';
import Cart from './cart/cart';
import Myhook from './hooks/myhook';

class App extends Component {

  products = [
    {
      id: 0,
      emoji: '😀',
      name: "test grinning face",
      qty: 1
    },
    {
      id: 1,
      emoji: '🎉',
      name: "party popper",
      qty: 2
    },
    {
      id: 2,
      emoji: '💃',
      name: "woman dancing",
      qty: 3
    }
  ]
  
  constructor(props) {
    super(props);
    this.state = {
      products: this.products,
      items: [],
      displayItems: true
    }
  }

  callbackFunction = (product) => {
    this.state.items.push(product)
    this.setState({displayItems: true})
  }

  render() {
    return (
      
      <div className="App">

        <header className="displayEmojiNameApp-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <div className="container">
          <tr>
            <td class="my-space">
            <Myhook 
                  state={this.state} 
                  parentCallback={this.callbackFunction}
            ></Myhook>
            </td>
            <td class="my-space">
                <Products 
                  state={this.state} 
                  parentCallback={this.callbackFunction}>                    
                  </Products>
            </td>
            <td>
                <Cart products={this.state.items}></Cart>
            </td>
          </tr>
        </div>

    </div> /* end div */
    );
  }
}

export default App;