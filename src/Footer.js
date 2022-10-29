import React from "react";

const Footer = () => {
    return (
     <> 
       <footer>
          <div className="container">
             <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Carreers</a>
                                </li>
                                
                                <li>
                                    <a href="#">Update News</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h2>Support</h2>
                            <ul>
                                <li>
                                    <a href="#">Help center</a>
                                </li>
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Feedback</a>
                                </li>
                                
                            </ul>
                        </div>

                        <div className=" col-6 col-lg-3">
                            <h2>Services</h2>
                            <ul>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Do not sell my Info</a>
                                </li>
                                <li>
                                    <a href="#">Aboid Scams & Fraud</a>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h2>Follow us</h2>
                                 <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-facebook fontawesome-style"></i>
                                        </a>
                                    </div>

                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-instagram fontawesome-style"></i>
                                        </a>
                                    </div>

                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-youtube fontawesome-style"></i>
                                        </a>
                                    </div>

                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-twitter fontawesome-style"></i>
                                        </a>
                                    </div>
                                 </div>
                        </div>
             
                    </div>
                    <hr />
                    <div className="mt-5"> 
                        <p className="main-hero-para text-center w-100">HouseRentals.com is part of the Rent. Network of Sites © 2022 HouseRent Group Inc. All photos, videos, text and other content are the property of HouseRent Group Inc. HOUSERENTALS.COM and the HOUSERENTALS.COM Trade Dress are registered trademarks of HouseRent Group Inc. All rights reserved. If you are using a screen reader, or are having trouble reading this website, please email accessibilityfeedback@houserent.com.</p>
                    </div>
                </div>
             </div>
          </div>
       </footer> 
    </>
  );
  
};

export default Footer;