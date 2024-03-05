export default function RegisterForm(){
    return (
        <div className="d-flex align-items-center justify-content-center w-100 p-0 ">
        <div className="card d-flex flex-column  p-5 my-5 login_container " >

            <div className="type-selection">
        <p className="mt-3 text-center text-lg-start fw-bold mx-lg-4 text-uppercase font-rem-1">Are you a coach or an athlete?<span className="text-danger">*</span></p>
        <div className="d-flex row">

            <div className="col-12 col-lg-6 my-3 px-lg-1">
                <div className="card mx-lg-4">
                <img className="img-fluid" src="/assets/images/login/coach.png" alt="" />
                </div>
            </div>
         
             <div className="col-12 col-lg-6 my-3 px-lg-1">

                <div className="card mx-lg-4">
                <img className="img-fluid" src="/assets/images/login/player.png" alt="" />
                </div>
                
            </div>


        </div>
        </div>

          <div className="name mx-lg-2 my-1 d-flex row">

            <div className="col-6">
        <p className="mt-3 text-start fw-bold text-uppercase font-rem-1">First Name<span className="text-danger">*</span> </p>
            <input type="first_name" className="form-control" id="email" placeholder="John"/>
                </div>

               <div className="col-6">
        <p className="mt-3 text-start fw-bold text-uppercase font-rem-1">Last Name<span className="text-danger">*</span> </p>
            <input type="last_name" className="form-control" id="email" placeholder="Smith"/>
            </div>

        </div>

        <div className="email mx-lg-4 my-2">
        <p className="mt-3 text-start fw-bold text-uppercase font-rem-1">Your Email<span className="text-danger">*</span> </p>
            <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
        </div>

         <div className="email mx-lg-4 my-2">
        <p className="mt-3 text-start fw-bold text-uppercase font-rem-1">Your Username<span className="text-danger">*</span></p>
            <input type="username" className="form-control" id="username" placeholder="johnsmith03"/>
        </div>


         <div className="email mx-lg-4 my-2">
        <p className="mt-3 text-start fw-bold text-uppercase font-rem-1">Your Password<span className="text-danger">*</span> </p>
            <input type="password" className="form-control" id="password" />
        </div>

          <div className="email mx-lg-4 my-3">
        <button className="btn btn-primary text-white w-100">SUBMIT</button>
        </div>



</div>
        </div>

        
    )
}