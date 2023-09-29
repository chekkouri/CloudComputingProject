import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

import { Context } from '../context/Context'
import { sliderAnim } from '../animations/login'

const Login = () => {
	const { dispatch, isFetching } = useContext(Context)
	const history = useHistory()

	const initialValues = { username: '', password: '' }

	const onSubmit = async values => {
		console.log("start")
		console.log(values)
		
		dispatch({ type: 'LOGIN_START' })
		try {
			const res = await axios.post('http://api.thefzz.com:3000/user/login', values)
			console.log(res)
			toast.success('Login Successful', { position: 'bottom-center', className: 'toast' })
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
			history.replace('/')
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE' })
			toast.error(err.response.data, { position: 'bottom-center', className: 'toast' })
		}
	}

	const validate = values => {
		const errors = {}

		if (!values.password) errors.password = 'Required'
		else if (values.password.length < 8) errors.password = 'Must be at least 8 characters'
		else if (values.password.length > 30) errors.password = 'Must be less than 30 characters'
		return errors
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	})

	useEffect(() => {
		sliderAnim()
	}, [])

	const [eyeIcon, setEyeIcon] = useState(false)
	const [passVisiblity, setPassVisiblity] = useState(false)

	const eyeHandler = () => {
		setEyeIcon(!eyeIcon)
		setPassVisiblity(!passVisiblity)
	}

	return (
		<div className="login">
			<Toaster />
			<div className="login__left">
				<span className="login__title">Login</span>
				<form className="login__form" onSubmit={formik.handleSubmit}>
					<label htmlFor="email">Username</label>
					<input
						className="login__input"
						type="email"
						id="email"
						placeholder="Enter your email..."
						name="username"
						{...formik.getFieldProps('email')}
						// autoFocus
					/>
					{formik.errors.username && formik.touched.username ? (
						<p className="error">{formik.errors.username}</p>
					) : null}

					<label htmlFor="password">Password</label>
					<div className="eye">
						<input
							className="eye__input register__input"
							type={`${passVisiblity ? 'text' : 'password'}`}
							placeholder="Enter your password..."
							id="password"
							name="password"
							{...formik.getFieldProps('password')}
						/>
						<i
							className={`fa-solid eye__icon ${eyeIcon ? 'fa-eye-slash' : 'fa-eye'}`}
							onClick={eyeHandler}
						></i>
					</div>
					{formik.errors.password && formik.touched.password ? (
						<p className="error">{formik.errors.password}</p>
					) : null}

					<button type="submit" className="login__button" disabled={isFetching || !formik.isValid}>
						{isFetching ? 'Loading...' : 'Login'}
					</button>

					<p className="login__register">
						You don't have an account?{' '}
						<span className="link signup" onClick={() => history.push('/register')}>
							Sign Up
						</span>
					</p>
				</form>
			</div>
			<div className="login__right">
				<span>The Fzz</span>
				<p>
					Don't waste your time on thinking, share your ideas with us and we will turn them into
					reality...
				</p>
			</div>
		</div>
	)
}

export default Login
