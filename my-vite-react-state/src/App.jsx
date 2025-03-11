import './App.css';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import NameForm from './components/NameForm';
import CounterWithEffect from './components/CounterWithEffect';

function App() {
  return (
    <>
      <Counter />   
      <br/>
      <ToggleButton />
      <br/>
      <NameForm/>
      <CounterWithEffect/>
    </>
  )
}

export default App
