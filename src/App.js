import React, { useState }from 'react';
import './App.css';


function App() {
  const[cart, setCart] = useState([]);
 
   
  const [products]= useState([
    {
      name : 'Laptop',
      cost :'Rs 50,000',
      image :'https://image.shutterstock.com/image-photo/front-view-laptop-blank-white-260nw-1708044856.jpg',
      
    },
    {
      name: 'Tablet',
      cost : 'Rs 20,000',
      image : 'https://images-na.ssl-images-amazon.com/images/I/61ul3f89uDL._SL1338_.jpg',

    },
    {
      name: 'Smart Phone',
      cost : 'Rs 30,000',
      image : 'https://static.digit.in/product/257006033d0edbd5dd950848d8144229df6adef6.jpeg?tr=w-1200',

    },
    {
      name:'Smart watch',
      cost : 'RS 10,000',
      image :'https://images.moneycontrol.com/static-mcnews/2020/03/smartwatch-770x433.jpg?impolicy=website&width=770&height=431'
    },
]);
const addToCart = (product) => {
  console.log('we are in add to cart');
  setCart([...cart,product]);
  }
  return (
    <div className="App">
      <header>
        <button>My Cart.({cart.length})</button>
      </header>
      
      <h1>Products</h1>
      <div className= "products">
      {products.map((product,idx) => (
        <div className="product" key={idx}>
           <h3>{product.name}</h3>
           <h4>{product.cost}</h4>
           <img src={product.image} alt={product.name}/>
           <button onClick={() => addToCart(product )}>
             Add to cart
             </button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
