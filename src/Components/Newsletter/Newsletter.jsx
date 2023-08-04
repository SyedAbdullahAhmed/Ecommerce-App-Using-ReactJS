import React from "react";
import "./Newsletter.scss"
export const Newsletter = () => {
    return (
       <div className="box">
        <div className="cont">
            <h5>NEWS LETTER</h5>
            <h3>SIGNUP FOR LATEST UPDATES AND OFFER</h3>
            <div className="f">
                    <input type="email" className="form-control-newsletter" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <button type="submit" className="btn-newsletter">Subscribe</button>
            </div>
            <p>Will be use on accordance with our privacy policy</p>
        </div>
       </div>
    );
};

