export default function Footer(){
    return (
        <footer className="footer-div py-8">
            <div className="container">
                <div className="d-flex flex-column  m-5">

                    <div className="d-flex mb-3 flex-row justify-content-between row">

                        <div className="col-12 col-lg-3">

                            <img className="img-fluid" src="/assets/images/footer/opsm_network_logo.png" alt="" />


                        </div>


                        <div className="text-uppercase text-bold col-12 col-lg-1 my-4 my-lg-0 text-white d-flex flex-column justify-content-start align-items-start">

                            <h3 className="heavy-font mb-4">Company</h3>
                            <p className="text-left h6 heavy-font">Home</p>
                            <p className="text-left h6 heavy-font">Services</p>    
                            <p className="text-left h6 heavy-font">Events</p>
                            <p className="text-left h6 heavy-font">Players</p>

                        </div>

                       <div className="text-uppercase text-bold col-12 col-lg-1 my-4 my-lg-0 text-white d-flex flex-column justify-content-start align-items-start">

                            <h3 className="heavy-font  mb-4">Support</h3>
                            <p className="text-left h6 heavy-font">Contact</p>
                            <p className="text-left h6 heavy-font">FAQ</p>    
                            <p className="text-left h6 heavy-font">Careers</p>

                        </div>

                        <div className="col-lg-4 col-12 my-4 my-lg-0 text-white text-uppercase d-flex flex-column align-items-start">

                            <h3 className="heavy-font mb-4">Be The First To Know</h3>

                            <form >

                                <div className="d-flex justify-content-start align-items-start row">

                        <div className="col-6 d-flex flex-column justify-content-center align-items-start ">
                        <label for="exampleInputEmail1" className="form-label text-left ">First Name</label>
                        <input type="email" class=" transparent-input form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                    </div>

                        <div className="col-6 d-flex flex-column justify-content-center align-items-start ">
                        <label for="exampleInputPassword1" className="form-label">Last Name</label>
                        <input type="password" className="transparent-input form-control" id="exampleInputPassword1"/>
                    </div>

                        <div className="col-12 mb-4 d-flex flex-column justify-content-center align-items-start ">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control transparent-input" id="exampleInputPassword1"/>
                    </div>
                    </div>

                    <div className="d-flex justify-content-start align-items-start">
                 
                    <button type="submit" className="btn btn-primary text-white">SUBSCRIBE</button>

                    </div>
                    </form>


                        </div>



                        </div>

                       <div className="d-flex flex-column justify-content-center text-white mt-5 h6 heavy-font">
  <div className="d-flex flex-column flex-md-row justify-content-center mb-3">
    <span className="mx-md-4 text-center text-md-left">PRIVACY POLICY</span>
    <span className="text-center text-md-left">TERMS OF SERVICES</span>
  </div>
  <div className="col-12">2024 OPSM Network All Rights Reserved.</div>     
</div>





                </div>
            </div>

           
        </footer>
    )
}