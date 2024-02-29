'use client';


export default function DarkHeader() {
    return (
        <div  className="bg-navbar-dark row">
            <div className="links col-5  d-flex justify-content-center align-items-center pt-2">

                <p className='mx-2' href="/home">EVENTS</p>
                <p className='mx-2' href="/home">PLAYERS</p>
                <p className='mx-2' href="/home">COACHES</p>
                 <p className=' mx-2' href="/home">ABOUT</p>
                 <p className='mx-2' href="/home">CONTACT</p>


            </div>

            <div className="img col-2 e d-flex justify-content-center align-items-center">

                <img className='img-header' src="/assets/logos/opsm_logo_white.png" alt="" />

            </div>

            <div className="login col-5 pt-3">

                <div className="d-flex justify-content-end align-items-center px-4">
                    <p className='mx-3' href="/home">LOGIN</p>
                    <button className='btn btn-primary px-2 py-1 mx-3 text-white mb-3' href="/home">REGISTER</button>
                        </div>

            </div>


   
        </div>
    );
    }