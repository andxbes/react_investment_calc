import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsvalid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        // [inputIndentifier]: new Number(newValue)
        [inputIndentifier]: +newValue
      }
    });
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsvalid && <p className='center'>Please enter a duration greater than zero</p>}
      {inputIsvalid && <Results input={userInput} />}
    </>
  )
}

export default App
