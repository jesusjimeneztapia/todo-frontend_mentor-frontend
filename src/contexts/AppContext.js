import { createContext } from 'react'
import useTheme from '../hooks/useTheme'
import useUserCredentials from '../hooks/useUserCredentials'

const AppContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
	logout: () => {},
	signin: (user) => {},
	user: null,
})

export const AppContextProvider = ({ children }) => {
	const { theme, toggleTheme } = useTheme()
	const { logout, signin, user } = useUserCredentials()
	return (
		<AppContext.Provider
			value={{
				theme,
				toggleTheme,
				logout,
				signin,
				user,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export default AppContext
