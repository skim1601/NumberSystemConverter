import './App.css';
import { useState } from 'react';
import Select from 'react-select';
import Form from './Form';

const App = () => {
  const [number, setNumber] = useState(0);
  const [base, setBase] = useState({value: 10, label: 'Decimal (10)'});
  const [newBase, setNewBase] = useState({value: 10, label: 'Decimal (10)'});

  const systems = [
    {value: 2, label: 'Binary (2)'},
    {value: 3, label: 'Ternary (3)'},
    {value: 4, label: 'Quaternary (4)'},
    {value: 5, label: 'Quinary (5)'},
    {value: 6, label: 'Ternary (6)'},
    {value: 7, label: 'Septenary (7)'},
    {value: 8, label: 'Octal (8)'},
    {value: 9, label: 'Nonary (9)'},
    {value: 10, label: 'Decimal (10)'},
    {value: 11, label: 'Undecimal (11)'},
    {value: 12, label: 'Duodecimal (12)'},
    {value: 13, label: 'Tridecimal (13)'},
    {value: 14, label: 'Tetradecimal (14)'},
    {value: 15, label: 'Pentadecimal (15)'},
    {value: 16, label: 'Hexadecimal (16)'}
  ]
  
  const getNumberSystem = (num, base, newBase) => {
    if (num === ""){
      num = 0;
    }
    num = parseInt(num, base);
    return (num >>> 0).toString(newBase);
  }

  const customStyles = {
    container: provided => ({
      ...provided,
      width: 200
    })
  };
  
  return (
    <div className="App">
      <h1>Number Systems Converter</h1>

      <Form number={number} base={base} setNumber={setNumber} label={base.label}/>

      <div className="select-box">
        <Select options={systems} onChange={(choice) => {setBase(choice); setNumber(0);}} styles={customStyles}/> 
        <p style={{margin: '0 2vw'}}>to</p>
        <Select options={systems} onChange={(choice) => setNewBase(choice)} styles={customStyles}/> 
      </div>

      <p>{newBase.label}: {getNumberSystem(number, base.value, newBase.value)}</p>
    </div>
  );
}

export default App;