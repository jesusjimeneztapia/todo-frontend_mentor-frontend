import { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import GlobalStyles from '../../../styles/global.module.scss'
import styles from './Submit.module.scss'

const Submit = ({ title, onClick, variant = '' }) => {
	const { theme } = useContext(AppContext)
	return (
		<button
			className={`${GlobalStyles['border-radius-1']} ${
				GlobalStyles['margin-t16']
			} ${styles.submit} ${variant !== '' && styles[`--${variant}`]} ${
				theme === 'dark' && styles['--dark']
			}`}
			type='submit'
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default Submit
