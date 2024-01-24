import { useState } from "react";
const Calculator = () => {
  const [resultValue, setResultValue] = useState("");
  const [computeValue, setComputeValue] = useState(null);

  const handleBtnClick = (buttonValue) =>
    setResultValue(resultValue + buttonValue);

  const handleCalculate = () => {
    if (resultValue === "") {
      setComputeValue("Error");
      return;
    } else {
      try {
        setComputeValue(eval(resultValue));
      } catch (error) {
        setComputeValue("NaN");
      }
    }
  };

  const handleClear = () => {
    setResultValue("0");
  };

  return (
    <div className="center__div">
      <h1>React Calculator</h1>
      <label htmlFor="result">
        <input type="text" value={resultValue} readOnly />
      </label>

      <div className="result">{computeValue}</div>

      <div className="btns">
        <button onClick={() => handleBtnClick("7")}>7</button>
        <button onClick={() => handleBtnClick("8")}>8</button>
        <button onClick={() => handleBtnClick("9")}>9</button>
        <button onClick={() => handleBtnClick("+")}>+</button>
        <button onClick={() => handleBtnClick("4")}>4</button>
        <button onClick={() => handleBtnClick("5")}>5</button>
        <button onClick={() => handleBtnClick("6")}>6</button>
        <button onClick={() => handleBtnClick("-")}>-</button>
        <button onClick={() => handleBtnClick("1")}>1</button>
        <button onClick={() => handleBtnClick("2")}>2</button>
        <button onClick={() => handleBtnClick("3")}>3</button>
        <button onClick={() => handleBtnClick("*")}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleBtnClick("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleBtnClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
