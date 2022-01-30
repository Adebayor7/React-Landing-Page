import React from 'react';
import Contact from './Components/Contact';
import ContactData from './Components/ContactData';
import ContactCardList from './Components/ContactCardList';
import DisplayCardData from './Components/DisplayCardData';
import FooterCard from './Components/FooterCard';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <DisplayCardData />
      <ContactCardList />
      <FooterCard />
    </div>
  );
}

export default App;