import React from 'react'

const Calculator = () => {
  return (
    <>
      
      <div className="container">

          <div className="row">

          <form action="">
                {/* <div className="display">
                    <input type="text" value={value}/>
                    {error && <div className="error">{error}</div>}
                </div> */}
                <div>
              <input type="button" value="AC" onClick={() => handleButtonClick('AC')} />
              <input type="button" value="DE" onClick={() => handleButtonClick('DE')} />
              <input type="button" value="." onClick={() => handleButtonClick('.')} />
              <input type="button" value="/" onClick={() => handleButtonClick('/')} />
            </div>

            <div>
                    <input type="button" value="7" onClick={e=>setValue(value + e.target.value)} />
                    <input type="button" value="8" onClick={e=>setValue(value + e.target.value)} />
                    <input type="button" value="9" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="*" onClick={e=>setValue(value + e.target.value)}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="6" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="+" onClick={e=>setValue(value + e.target.value)}/>
                </div>


                <div>
                    <input type="button" value="1" onClick={e=>setValue(value + e.target.value)} />
                    <input type="button" value="2" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="3" onClick={e=>setValue(value + e.target.value)}/>
                    <input type="button" value="-" onClick={e=>setValue(value + e.target.value)}/>
                </div>
                <div>
              <input type="button" value="00" onClick={() => handleButtonClick('00')} />
              <input type="button" value="0" onClick={() => handleButtonClick('0')} />
              <input className='equal' type="button" value="=" onClick={() => handleButtonClick('=')} />
            </div>
            </form>

          </div>


      </div>

    </>
  )
}

export default Calculator
