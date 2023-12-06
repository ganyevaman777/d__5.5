import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFirst, changeSecond, divide, minus, multiple, plus } from './store/mathSlice';

function App() {

  const dispatch = useDispatch()
  const { first, second, answer } = useSelector(state => state.mathReducer)

  const changeFirstFunc = (event) => {
    dispatch(changeFirst(event.target.value))
  }

  const changeSecondFunc = (event) => {
    dispatch(changeSecond(event.target.value))
  }

  return (
    <div className="App">
      <input value={first} type='number' onChange={changeFirstFunc}/>
      <input value={second} type='number' onChange={changeSecondFunc}/>
      <button onClick={()=>dispatch(plus())}>+</button>
      <button onClick={()=>dispatch(minus())}>-</button>
      <button onClick={()=>dispatch(multiple())}>*</button>
      <button onClick={()=>dispatch(divide())}>/</button>
      <div>{answer}</div>
    </div>
  );
}

export default App;
