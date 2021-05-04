import React from 'react'
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import './style/App.scss';

function App() {
  return (
    <div className="App">
     <section className="section">
       <div className="container">
        <Card1/>
         <Card2/>
         <Card3/>
       </div>
     </section>
    </div>
  );
}

export default App;
