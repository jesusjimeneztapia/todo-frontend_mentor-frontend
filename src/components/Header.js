import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import MoonIcon from '../assets/images/moon-icon.svg'
import SunIcon from '../assets/images/sun-icon.svg'
import styles from './Header.module.scss'
import GlobalStyles from '../styles/global.module.scss'

const Header = () => {
	const { theme, toggleTheme } = useContext(AppContext)

	return (
		<header className={GlobalStyles.container}>
			<section className={styles.header}>
				<h1 className={styles.header__title}>Todo</h1>
				<img
					className={styles.header__icon}
					src={theme === 'light' ? MoonIcon : SunIcon}
					alt='Toggle theme'
					onClick={() => toggleTheme()}
				/>
			</section>
		</header>
	)
}

export default Header
