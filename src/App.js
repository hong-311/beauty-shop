import React, { useRef, useState } from 'react';
import BestBox from './component/BestBox';
import Title from './component/Title';
import BestList from './component/BestList';
import Header from './component/Header';
import { initialBests } from './component/BestData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './component/Product';

function App() {
  const [bests, setBests] = useState(initialBests);

  const onToggle = id => {
    setBests(
      bests.map(best => (best.id === id ? { ...best, like: !best.like } : best))
    );
  };

  return (
    <Router>
      <Header />
      <BestBox>
        <Title name="BEST PRODUCT" />
        <Routes>
          <Route
            path="/"
            element={<BestList bests={bests} onToggle={onToggle} />}
          />
         <Route path="/:id" element={<Product />}></Route>
        </Routes>
        
      </BestBox>
    </Router>
  );
}

export default App;
