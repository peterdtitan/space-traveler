import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Missions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
