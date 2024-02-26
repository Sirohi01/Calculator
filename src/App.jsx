import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import { useState } from 'react';
function App() {

  const [calVal,setCalVal] = useState("");
  const onButtonClick  = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
  } else if (buttonText === "=") {
    const result = eval(calVal);
    setCalVal(result);
} else {
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }

  }
  return (
    <center>
    <h1>Calculator</h1>
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
    </center>
  );
}

export default App
