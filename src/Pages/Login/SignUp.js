import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import logo2 from '../../images/logo-light.jpg';
import Message from '../../Components/Message'


function SignUp({location,history}) {
	// const auth = useSelector(state => state.auth)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmpassword, setconfirmPassword] = useState('')
	const dispatch = useDispatch()
	const userLogin = useSelector(state => state.userLogin)
	
	// bringing things from the reducer
	const{loading , error ,user} = userLogin


	const redirect = location.search ? location.search.split('=')[1] :'/'

	// if the user is already logged in.
	useEffect(() => {
		if((user && user.user && user.user.roles)== 1){
			history.push("/rd-dashboard")
		}
		else if(user && user.user && user.user.roles==2){
			history.push("/bh-dashboard")
		}
		else if(user && user.user && user.user.roles ==3){
			history.push("/hr-dashboard")
		}
		else if(user && user.user && user.user.roles==4){
			history.push("/bh-dashboard")
		}
		else history.push("/")
		
		
	}, [history, user,redirect])


	const SignUpHandler= (e) => {
		e.preventDefault()
		// dispatch login
		// dispatch(login(email,password))
	}

	return (
		<div id="loginPage">
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-more">
							<div class="row">
								<div class="col-md-12">
									<div class="signup">
										<div class="signup-connect">
											<img src={logo2} className="img-responsive" alt="logo" />
											<br></br><br></br>
											<div className="hospName">
												<span className="hospTagline">Welcome to </span>
												<span className="hospHeader">CLOUDNINE PORTAL</span><br />
											</div>
										</div>
										<div class="signup-classic">
											<span className="hospTagline">Sign Up</span>
											{error && <Message variant="danger">{error}</Message>}
											<form class="form" onSubmit={SignUpHandler} >
												    <fieldset class="username">
													{/* {...register('username', { required: true })} */}
                                                    <input   type="text" name="Name" className="form-control inputField" value={name} onChange={(e) => setName(e.target.value)} id="exampleInputname" aria-describedby="name" placeholder="Name" />
                                                    </fieldset>
                                                    <fieldset class="username">
													<input   type="text" name="username" className="form-control inputField" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
												    </fieldset>
												    <fieldset class="password">
													<input  type="password" name="password" className="form-control inputField" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
												    </fieldset>
                                                    <fieldset class="confirmpassword">
													<input  type="password" name="confirmpassword" className="form-control inputField" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} id="exampleInputPassword2" placeholder="Confirm Password" />
												    </fieldset>
												    <button type="submit" class="sub-btn">Register</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp

