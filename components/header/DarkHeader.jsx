'use client';

export default function DarkHeader() {
    return (
        <div  className="bg-navbar-dark row fw-bold">
            <div className="links col-5  d-flex justify-content-center align-items-center pt-2">

                <p className='mx-2'>
                    EVENTS</p>
                <p className='mx-2'>
                    PLAYERS</p>
                <p className='mx-2'>
                    COACHES</p>
                 <p className=' mx-2'>
                    ABOUT</p>
                 <p className='mx-2'>
                    CONTACT</p>



            </div>

            <div className="img col-2 e d-flex justify-content-center align-items-center">

                <img className='img-header' src="/assets/logos/opsm_logo_white.png" alt="" />

            </div>

            <div className="login col-5 pt-3">

                <div className="d-flex justify-content-end align-items-center px-4">
                    <div> <p className='mx-3' href="/login" onClick={e=>window.location.href='/login'}> LOGIN</p></div>
                   
                    <button className='btn btn-primary px-2 py-1 mx-3 text-white mb-3 fw-bold' onClick={e=>window.location.href='/register'}>REGISTER</button>
                        </div>

            </div>


   
        </div>
    );
    }