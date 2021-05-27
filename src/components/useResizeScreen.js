import { useEffect, useState } from 'react'

const useResizeScreen = () => {
	const [screen, setScreen] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	useEffect(() => {
		const resize = (e) => {
			setScreen({
				width: e.currentTarget.innerWidth,
				height: e.currentTarget.innerHeight,
			})
		}
		window.addEventListener('resize', resize)

		return () => window.removeEventListener('resize', resize)
	}, [])

	return screen
}

export default useResizeScreen
