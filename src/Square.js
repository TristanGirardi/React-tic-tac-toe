import './Square.css';
const Square = ({value, handleClick}) =>{ 
    return(
<>
    <button 
       className={`square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`} onClick={handleClick}> 
            {value}
    </button>
</>
    );
}
export default Square