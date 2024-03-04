'use client'
export default function Header(){
    return (
        <div className="bg-navbar-dark  d-flex flex-column align-items-center justify-content-center">
<div className="image-div">
            <img onClick={e=>window.location ="/"} className='img-fluid' src="/assets/logos/opsm_logo_white.png" alt="" style={{maxHeight:"30px"}} />
            
            </div>


        </div>
    )
}