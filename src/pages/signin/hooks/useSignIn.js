import { useContext, useState } from 'react'
import AppContext from '../../../contexts/AppContext'
import UserService from '../../../services/user.service'

const useSingIn = () => {
	const { signin } = useContext(AppContext)
	const [isLogin, setIsLogin] = useState(true)

	const signinHook = ({ username, password }) => {
		let action
		if (isLogin) {
			action = UserService.login
		} else {
			action = UserService.register
		}
		action({ username, password })
			.then((response) => {
				const { status, statusText } = response
				if (status >= 500) {
					return alert(
						`${
							statusText ? statusText : 'Server Internal Error'
						}: Some problem occurred with the server`
					)
				}
				const { data } = response
				if (status >= 400) {
					const { title, message } = data
					return alert(`${title}: ${message}`)
				}
				signin(data)
			})
			.catch((error) => {
				console.error({ error })
			})
	}

	return {
		setIsLogin,
		signin: signinHook,
	}
}

export default useSingIn
