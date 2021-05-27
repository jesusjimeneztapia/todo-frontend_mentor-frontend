import { http } from './http'

const userURL = '/users'

const UserService = {
	register: async (user = { username: '', password: '' }) => {
		try {
			const response = await http.request({
				url: userURL,
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				data: user,
			})
			return response
		} catch (error) {
			return error
		}
	},
	login: async (user = { username: '', password: '' }) => {
		try {
			const response = await http.request({
				url: `${userURL}/login`,
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				data: user,
			})
			return response
		} catch (error) {
			return error
		}
	},
}

export default UserService
