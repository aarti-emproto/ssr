import React from 'react';
import './index.css';
import Navbar from './navbar';

function Home() {

  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }

  return (
  <>
  <Navbar />
  <div className="container">
    <div className="row cart justify-content-center">
      <button onClick={increment} className="btn btn-primary m-2">Increment</button>
      <span className="m-2">{count}</span>
      <button onClick={decrement} className="btn btn-primary m-2">Decrement</button>
    </div>
  </div>
  </>
  );
}

export default Home;