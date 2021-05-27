import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import styles from './index.module.scss'

const Page = ({ children }) => {
	const { theme } = useContext(AppContext)
	return (
		<div
			className={`${styles.page} ${theme === 'dark' && styles['--dark']}`}
		>
			{children}
		</div>
	)
}

export default Page
