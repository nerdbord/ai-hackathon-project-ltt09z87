// App.js
import React, { useState } from 'react';
import FAQ from './assets/components/FAQ';

const App = () => {
  //FAQ OPEN
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  //FAQ

  return (
    <div className="App">

      <FAQ isOpen={isOpen} handleClose={handleToggleFAQ} />
      {!isOpen && (
        <button onClick={handleToggleFAQ}>Otwórz FAQ</button>
      )}
      
    </div>
  );
};

export default App;
