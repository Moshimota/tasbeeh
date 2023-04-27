import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0)
  if(total>99){
    setTotal(0)
  }
  const clearFunc = () =>{
    let a = prompt("siz haqiqatdan tozalamoqchimisiz\nagar ha bosa \"y\"\nagar yo'q bosa \"n\"")
    if(a === "y"){
      setTotal(0)
    }
  }
  const KakFunc = () =>{
    setTotal(total +1)
  }
  return (
    <div className="App">
      <div className='bek'>
        <div className='go'>
          <button className='btn2' onClick={() => clearFunc("knopka.mp3")}>clear</button>
        </div>
        <div className='kak'>
          <p className='con'>{total}</p>
        </div>
        <p className='duo'>سبحان الله</p>
      <button className='btn' onClick={() => KakFunc("knopka.mp3")}></button>
      </div>
    </div>
  );
}

export default App;
