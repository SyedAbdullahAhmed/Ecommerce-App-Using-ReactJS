import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.scss"

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex'>
        <div className="left">
          <img src="https://www.verywellmind.com/thmb/CTKCNod92r5HD0j4uLXuAHq05YQ=/6000x0/filters:no_upscale():max_bytes(150000):strip_icc()/asian-woman-using-the-smart-mobile-phone-for-check-online-shopping-order-is-completed-with-clothes-beside-the-glassess-in-store-shop-with-happy-action-at-department-center-961515078-d885f0506450479c9efb38d9ddf1ed58.jpg" alt="" />
        </div>

        <div className="right">
          <div className="signup-border">
            <form>
            <h1>SIGNUP</h1>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="First Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Last Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control"placeholder="Password"  id="exampleInputPassword1"/>
              </div>
              <button type="submit" className="login bg-dark">SignUp</button>
              <h6>Already have an account?</h6>
              <button type="submit" className="login bg-dark " onClick={()=>navigate("/login")}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
