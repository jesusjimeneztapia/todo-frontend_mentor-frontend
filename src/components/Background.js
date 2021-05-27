import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import useResizeScreen from './useResizeScreen'
import BgDesktopLight from '../assets/images/bg-desktop-light.jpg'
import BgDesktopDark from '../assets/images/bg-desktop-dark.jpg'
import BgMobileLight from '../assets/images/bg-mobile-light.jpg'
import BgMobileDark from '../assets/images/bg-mobile-dark.jpg'
import styles from './Background.module.scss'

const Background = () => {
	const { width } = useResizeScreen()
	const { theme } = useContext(AppContext)
	return (
		<>
			<div
				className={`${styles.background} ${
					theme === 'dark' && styles['--dark']
				}`}
			>
				<div className={styles.background__image}>
					{width > 768 ? (
						<>
							<img
								src={BgDesktopLight}
								alt='Background Desktop Light'
							/>
							<img
								src={BgDesktopDark}
								alt='Background Desktop Dark'
							/>
						</>
					) : (
						<>
							<img
								src={BgMobileLight}
								alt='Background Mobile Light'
							/>
							<img
								src={BgMobileDark}
								alt='Background Mobile Dark'
							/>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Background
