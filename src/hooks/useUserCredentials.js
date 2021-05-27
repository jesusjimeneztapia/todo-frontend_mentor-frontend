import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import ROUTES from '../helpers/routes'

const localUser = localStorage.getItem('user')

const useUserCredentials = () => {
	const {
		location: { pathname },
		push,
	} = useHistory()
	const [user, setUser] = useState(localUser ? JSON.parse(localUser) : null)

	useEffect(() => {
		if (user) {
			if (pathname === ROUTES.signin) {
				push(ROUTES.home)
			}
		} else {
			if (pathname !== ROUTES.signin) {
				push(ROUTES.signin)
			}
		}
	}, [user, pathname, push])

	const signin = ({ id, username, token }) => {
		if (!user) {
			localStorage.setItem(
				'user',
				JSON.stringify({ id, username, token })
			)
			setUser({ id, username, token })
		}
	}

	const logout = () => {
		if (user) {
			localStorage.removeItem('user')
			setUser(null)
		}
	}

	return { user, signin, logout }
}

export default useUserCredentials
