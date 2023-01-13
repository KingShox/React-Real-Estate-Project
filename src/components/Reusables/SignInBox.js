import React from 'react'
import '../Reusables/SignUpBox.css'


function SignInBox() {
  return (
    <div class="contents">
        <div class="login-box">
            <h1>Login</h1>
            <div className="form">
                <label class="label">Email</label>
                <input className="input" type="email" placeholder=""/>
                <label className="label">Password</label>
                <input className="input" type="password" placeholder=""/>
                <button type="submit">SUBMIT</button>
            </div>
        </div>
        <p className="para-2"><strong>Have An Account? <a href="SIgnUpPage.html"> SIGN UP</a></strong></p>
    </div>
  )
}

export default SignInBox