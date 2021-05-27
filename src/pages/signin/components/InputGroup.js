import { useField } from 'formik'
import { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import styles from './InputGroup.module.scss'

const Input = ({ className = '', ...props }) => {
	const { theme } = useContext(AppContext)
	const [field, meta] = useField(props)

	return (
		<>
			<div className={`${styles.input} ${className !== '' && className}`}>
				<input
					className={`${styles.input__field} ${
						meta.touched && meta.error && styles.invalid
					} ${theme === 'dark' && styles['--dark']}`}
					{...field}
					{...props}
				/>
				{meta.touched && meta.error && (
					<small className={styles.input__message}>
						{meta.error}
					</small>
				)}
			</div>
		</>
	)
}

export default Input
