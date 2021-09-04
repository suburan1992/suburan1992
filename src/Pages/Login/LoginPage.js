import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import logo2 from '../../images/logo-light.jpg';
import {login} from '../../actions/authActions'
import Message from '../../Components/Message'


function LoginPage({location,history}) {
	// const auth = useSelector(state => state.auth)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
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
			history.push("/DoctorDashboard")
		}
		else history.push("/")
		
		
	}, [history, user,redirect])


	const submitHandler= (e) => {
		e.preventDefault()
		// dispatch login
		dispatch(login(email,password))
	}

	// const dashboard = () => {
	// 	let path = `dashboard`;
	// 	history.push(path);
	// }
	return (
		<div id="loginPage">
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-more">
							<div className="row">
								<div className="col-md-12">
									<div className="signup">
										<div className="signup-connect">
											<img src={logo2} className="img-responsive" alt="logo" />
											<br></br><br></br>
											<div className="hospName">
												<span className="hospTagline">Welcome to </span>
												<span className="hospHeader">CLOUDNINE PORTAL</span><br />
											</div>
										</div>
										<div class="signup-classic">
											<span className="hospTagline">Please login to access the Portal</span>
											
											{error && <Message variant="danger">{error}</Message>}
											<form class="form" onSubmit={submitHandler} >
												<fieldset class="username">
													{/* {...register('username', { required: true })} */}
													<input   type="text" name="username" className="form-control inputField" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
												</fieldset>
												<fieldset class="password">
													<input  type="password" name="password" className="form-control inputField" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
												</fieldset>
												<button type="submit" class="sub-btn">Login</button>
												{/* <a href="/SignUp">Register?</a> */}
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

export default LoginPage

