import {useState} from 'react'
import './App.css';
import Board from './Board';
import Salutation from './Salutation';
import Footer from './Footer';
import Header from './Header';

function TicTacToe() {
  const [bgColor, setBgColor] = useState('white');
  const handleMode = () => {
    setBgColor(prevColor => prevColor === 'white' ? 'black' : 'white');
  };
  return (
    <>
    <Header/>
    <div className='container'>
    <div className="Playing" style={{ backgroundColor: bgColor, color: bgColor === 'black' ? 'white' : 'black', padding: '20px' }}>
     <Salutation
     name='Tristan'
     />
     <Board/>
     <div className="DarkOrLigth">
     <button className="mode-button" onClick={handleMode}>Ligth/Dark</button>
     </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default TicTacToe;