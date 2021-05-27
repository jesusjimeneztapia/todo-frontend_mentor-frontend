import { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import styles from './Title.module.scss'

const Title = ({ className }) => {
	const { theme } = useContext(AppContext)
	return (
		<h3
			className={`${styles.title} ${className} ${
				theme === 'dark' && styles['--dark']
			}`}
		>
			Sign In
		</h3>
	)
}

export default Title
