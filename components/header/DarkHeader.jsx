'use client';

export default function DarkHeader() {
    return (
        <div  className="bg-navbar-dark row fw-bold">
            <div className="links col-5  d-flex justify-content-center align-items-center pt-2">

                <p className='mx-2'>
                    <a className="stretched-link" href="/events"></a>
                    EVENTS</p>
                <p className='mx-2'>
                    <a className="stretched-link" href="/players"></a>
                    PLAYERS</p>
                <p className='mx-2'>
                    <a className="stretched-link" href="/coaches"></a>
                    COACHES</p>
                 <p className=' mx-2'>
                    <a className="stretched-link" href="/about"></a>
                    ABOUT</p>
                 <p className='mx-2'>
                    <a className="stretched-link" href="/contact"></a>
                    CONTACT</p>



            </div>

            <div className="img col-2 e d-flex justify-content-center align-items-center">

                <img className='img-header' src="/assets/logos/opsm_logo_white.png" alt="" />

            </div>

            <div className="login col-5 pt-3">

                <div className="d-flex justify-content-end align-items-center px-4">
                    <p onClick={e=>{window.link = '/login'}} className='mx-3' href="/login"> <a className="stretched-link" href="/login"></a>LOGIN</p>
                    <button className='btn btn-primary px-2 py-1 mx-3 text-white mb-3 fw-bold'>REGISTER</button>
                        </div>

            </div>


   
        </div>
    );
    }