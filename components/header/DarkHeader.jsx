'use client';


export default function DarkHeader() {
    return (
        <div  className="bg-navbar-dark row">
            <div className="links col-5  d-flex justify-content-center align-items-center pt-3">

                <p className='header-nav-link mx-2' href="/home">Events</p>
                <p className='header-nav-link mx-2' href="/home">Players</p>
                <p className='header-nav-link mx-2' href="/home">Coaches</p>
                 <p className='header-nav-link mx-2' href="/home">About</p>
                 <p className='header-nav-link mx-2' href="/home">Contact</p>



            </div>

            <div className="img col-2 e d-flex justify-content-center align-items-center">

                <img className='img-header' src="/assets/logos/opsm_logo_black.png" alt="" />

            </div>

            <div className="login col-5 e">

                <div className="d-flex justify-content-end align-items-center pt-3 px-4">
                    <p className='header-nav-link mx-2 ' href="/home">Login</p>
                    <p className='header-nav-link mx-2 red_button' href="/home">Sign Up</p>
                        </div>

            </div>


   
        </div>
    );
    }