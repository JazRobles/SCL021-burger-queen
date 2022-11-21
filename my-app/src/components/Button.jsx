import React,{useState} from 'react' 
import '../Views/styles.css';

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
       {count}
       <div className='divCount'>
     
      <button className='btnMenos' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button className='btnMas' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </>
  );
}

export default Counter;
