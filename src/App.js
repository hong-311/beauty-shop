// App.js

import React, { useState } from 'react';
import BestBox from './component/BestBox';
import Title from './component/Title';
import BestList from './component/BestList';
import Header from './component/Header';
import { initialBests } from './component/BestData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import ShoppingCart from './component/cart/ShoppingCart';

function App() {
  const [bests, setBests] = useState(initialBests);
  const [cartItems, setCartItems] = useState([]);

  const onToggle = (id) => {
    setBests(
      bests.map((best) => (best.id === id ? { ...best, like: !best.like } : best))
    );
  };

  return (
    <Router>
      <Header />
      <BestBox>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title name="BEST PRODUCT" />
                <BestList bests={bests} onToggle={onToggle} />
              </>
            }
          />
          <Route path="/:id" element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </BestBox>
    </Router>
  );
}

export default App;
