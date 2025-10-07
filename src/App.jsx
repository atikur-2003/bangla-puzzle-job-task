import React from 'react';
import Navbar from './components/navbarComponents/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[200vh] bg-gray-50"> {/* Just for scroll testing */}
      </div>
    </div>
  );
};

export default App;