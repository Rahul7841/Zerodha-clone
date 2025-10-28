import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.png'></img>
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                              <li>Futures and options</li>
                              <li>Commodity derivatives</li>
                              <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                               <li>Stocks and IPOs</li>
                               <li>Direct mutual funds</li>
                               <li>Bonda and Govt. Securities</li>
                            </ul>
                        </div>
    
                    </div>

                    <img src='media/images/press-logos.png'style={{width:"90%"}}></img>
                    
                </div>

            </div>
        </div>
     );
}

export default Awards;