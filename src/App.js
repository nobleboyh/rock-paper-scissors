import './App.css';
import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Rules from './components/Rules';
import RuleModal from './components/RuleModal';
import Action from './components/Action';
import { AppContext } from '.';

function App() {
  console.log('render app');
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  const appContext = useContext(AppContext);
  appContext.score = { score, setScore };
  return (
    <div className="App">
      <div className="container mx-auto my-0 overflow-auto">
        <Header score={score}></Header>
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
