import './App.css';
import Button from './components/Button';
import CheckboxWithLabel from './components/Checkbox';

function App() {
  return (
    <div className="App">
      <Button label='click me ' />
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    </div>
  );
}

export default App;
