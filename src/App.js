import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Rules from './components/Rules';
import RuleModal from './components/RuleModal';
import Action from './components/Action';

function App() {
  console.log('render app');
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <div className="App">
      <div className="container mx-auto my-0 overflow-auto">
        <Header></Header>
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/action" element={<Action />}></Route>
          </Routes>
        </div>
        <Rules onClick={handleOpenModal}></Rules>
        {openModal && <RuleModal onExit={handleCloseModal}></RuleModal>}
      </div>
    </div>
  );
}

export default App;
