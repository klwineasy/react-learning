import './App.css';
import Button from './components/buttons';
import Form from './components/form';

function App() {
  const names = ['Kaung', 'Ei', 'Aye', 'Thandar'];
  return (
    <div className="App">
      <h1>Test</h1>
      {
        names.map((name, index) => (
          <h1 key={index}>Hello, my name is {name}</h1>
        ))
      }
      <Button text='View More' background='blue' margin='10px'/>
      <Button text='Filter' background='red' margin='10px'/>
      <Button text='Submit' background='green' margin='10px'/>
      <Form />
    </div>
  );
}

export default App;
