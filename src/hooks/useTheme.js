import { useEffect, useState } from 'react'

const localTheme = localStorage.getItem('theme')

const useTheme = () => {
	const [theme, setTheme] = useState(localTheme ? localTheme : 'light')
	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
	}

	return {
		theme,
		toggleTheme,
	}
}

export default useTheme
