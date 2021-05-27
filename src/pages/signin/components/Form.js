import GlobalStyles from '../../../styles/global.module.scss'
import styles from './Form.module.scss'
import useSingIn from '../hooks/useSignIn'
import * as yup from 'yup'
import { Formik } from 'formik'
import InputGroup from './InputGroup'
import Submit from './Submit'
import { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'

const UserSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, 'Too Short!')
		.max(40, 'Too Long!')
		.required('Field is Required!'),
	password: yup
		.string()
		.min(8, 'Too Short!')
		.max(64, 'Too Long!')
		.required('Field is Required!'),
})

const Form = ({ className }) => {
	const { theme } = useContext(AppContext)
	const { setIsLogin, signin } = useSingIn()

	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={UserSchema}
			onSubmit={(value) => {
				signin(value)
			}}
		>
			{({ handleSubmit }) => (
				<form
					className={`${styles.form} ${className} ${
						theme === 'dark' && styles['--dark']
					}`}
					onSubmit={handleSubmit}
				>
					<InputGroup name='username' placeholder='Enter username' />
					<InputGroup
						className={GlobalStyles['margin-t16']}
						name='password'
						placeholder='Enter password'
						type='password'
					/>
					<div className={styles.form__submit}>
						<Submit
							title='Log In'
							onClick={() => setIsLogin(true)}
						/>
						<Submit
							title='Register'
							variant='purple'
							onClick={() => setIsLogin(false)}
						/>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default Form
