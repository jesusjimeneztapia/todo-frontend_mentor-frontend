import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import GlobalStyles from '../../styles/global.module.scss'

const Home = () => {
	const { user } = useContext(AppContext)

	return (
		<main
			className={`${GlobalStyles.container} ${GlobalStyles['margin-t64']}`}
		>
			<p>{user && user.username}</p>
		</main>
	)
}

export default Home
