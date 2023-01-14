import React from 'react'
import "../Reusables/SignUpBox.css"

function SignUpBox() {
  return (
    <div className="contents">
        <div className="sign-box flex-col">
            <h1 className="flex-col">SIGN UP</h1>
           <p><strong>It's free and only takes a minute!</strong></p>
            <div className='flex-col'>
                <div className="form flex-col">
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
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <p className="para-2"><strong>Have An Account? <a href="SignIn"> Sign In</a></strong></p>
            </div>
            </div>
    </div>

  )
}

export default SignUpBox