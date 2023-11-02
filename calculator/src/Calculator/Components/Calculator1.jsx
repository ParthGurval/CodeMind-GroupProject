import React from "react";
import "../Css-Components/Calculator1.css";
import { useState } from "react";
import * as math from 'mathjs';

const Calculator1 = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "=") {
      if (value.trim() === "") {
        setError("Invalid Expression");
        return;
      }
      try {
        const result = math.evaluate(value); // Replace this line
        if (isNaN(result) || !isFinite(result)) {
          setError("Invalid Result");
        } else {
          setValue(result.toString());
          setError("");
        }
      } catch (error) {
        setError("Invalid Expression");
      }
    } else if (buttonValue === "AC") {
      setValue("");
      setError("");
    } else if (buttonValue === "DE") {
      setValue(String(value).slice(0, -1));
    } else if (buttonValue === "%") {
      // Implement percentage operation here
      const num = parseFloat(value) / 100;
      setValue(num.toString());
    } else if (buttonValue === "×") {
      // Implement multiplication operation here
      setValue(value + "*");
    } else if (buttonValue === ".") {
      if (
        !value.endsWith(".") && // Prevent trailing decimal point
        !value.match(/[.][0-9]*[.]/) // Prevent multiple decimal points in a row
      ) {
        setValue(value + ".");
      }
    }
    
    else if (buttonValue === "+/-") {
      // Toggle between positive and negative values
      if (value !== "") {
        if (value[0] === "-") {
          setValue(value.slice(1)); // Remove the negative sign
        } else {
          setValue("-" + value); // Add a negative sign
        }
      }
    } 
    
    else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} />
              {error && <div className="error">{error}</div>}
            </div>
            <div>
              <input
                type="button"
                value="AC"
                onClick={() => handleButtonClick("AC")}
                className="firstRowSym"
              />
              <input
                type="button"
                value="DE"
                onClick={() => handleButtonClick("DE")}
                className="firstRowSym"
              />
              <input
                type="button"
                value="+/-"
                onClick={() => handleButtonClick("+/-")}
                className="firstRowSym"
              />
              <input
                type="button"
                value="%"
                onClick={() => handleButtonClick("%")}
                className="firstRowSym"
              />
              <input
                type="button"
                value="÷"
                onClick={() => handleButtonClick("/")}
                className="Symbols"
              />
            </div>

            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
                className="Symbols"
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
                className="Symbols"
              />
            </div>

            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
                className="Symbols"
              />
            </div>
            <div>
              <input
                type="button"
                value="0"
                onClick={() => handleButtonClick("0")}
              />
              <input
                type="button"
                value="."
                onClick={() => handleButtonClick(".")}
              />
              <input
                className="equal"
                type="button"
                value="="
                onClick={() => handleButtonClick("=")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calculator1;
