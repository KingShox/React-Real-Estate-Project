import React from 'react'
import "../Pages/SignUp.css"


function SignUp() {
  return (
    <div className="contents">
        <div className="sign-box">
            <h1 className="">SIGN UP</h1>
           <p><strong>It's free and only takes a minute!</strong></p>
            <div>
                <div className="form">
                    <label className="label">First Name:</label>
                    <input className="input" type="text" name="firstname" path="firstName"/>
                    <label className="label">Last Name:</label>
                    <input className="input" type="text" name="lastname" path="lastName"/>
                    <label className="label">Email:</label>
                    <input className="input" type="email" name="email" path="email"/>
                    <label className="label">Password:</label>
                    <input className="input" type="password" name="password" path="password"/>
                    <label className="label">Confirm Password:</label>
                    <input className="input" type="password" name="confirmPassword" path="confirmPassword"/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <p><strong>By clicking the Sign Up button, you are agreeing to our 
             <a href=""> Terms and Conditions</a>  and <a href="#">Policy and Privacy</a>
            </strong></p>
        </div>
        <p className="para-2"><strong>Have an Account? <a href="">LOGN IN</a></strong></p>
    </div>
  )
}

export default SignUp