import React from 'react'

const Header = () => {
  return (
    <>
    
     <div className="container-fluid">

        <div className="row">

            <ul>

                    <li></li>
                    <li></li>
                    <li>NEWS</li>
                    <li>HIGHLIGHTS</li>
                    <li>KNOCKOUTS & GROUPS</li>
                    <li>SCORES & FIXTURES</li>
                    <li>TEAMS</li>
                    <li>FIFA WORLD CUP TROPHY TOUR</li>
                    <li>FIFA FAN FESTIVAL</li>
                    <li>
                        <select>
                            <option value="">ENG</option>
                            <option value="">HIN</option>
                            <option value="">POR</option>
                            <option value="">RUS</option>
                            <option value="">CHI</option>
                            <option value="">JAP</option>
                            <option value="">SPI</option>
                        </select>
                    </li>
                    <li></li>
                    <li></li>

            </ul>

        </div>

        <div className="row">

        <div className='col-4'>

            <div className="row">

                

            </div>

        </div>

        <div className='col-8'>
                <h4>NOW AVAILABLE</h4>
                <h1>Goals, Highlights & More</h1>
                <p>Relive your favourite moments from FIFA World Cup 2022<sup>TM</sup>.</p>
        </div>

        </div>
        
    </div> 
    </>
  )
}

export default Header
