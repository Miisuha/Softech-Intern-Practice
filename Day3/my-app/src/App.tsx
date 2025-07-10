import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <HelloWorld />
      </main>
      <Footer />
    </div>
  );
}

export default App;
