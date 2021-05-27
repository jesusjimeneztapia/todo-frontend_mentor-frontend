import axios from 'axios'

const baseURL = '/api'
const BEConfig = {
	baseURL,
	headers: {},
}

const ACTION = {
	400: (data) => data,
	401: (data) => data,
	403: () => ({ error: 'Forbidden' }),
	404: (data) => data,
	500: (data, status) => {
		console.error(`status ${status}: ${JSON.stringify(data)}`)
		return data
	},
}

const handleStatusCodes = ({ data, status, ...rest }) => {
	const action = ACTION[status]
	if (action) {
		return action(data, status)
	}
	return { data: ACTION[500](data, status), status, ...rest }
}

const handleError = (error) => {
	if (error.response) {
		throw handleStatusCodes(error.response)
	}
	if (error.request) {
		console.error(error.request)
		throw new Error('The request was made but no response was received')
	}
	console.error('Error', error.message)
	console.error(error.config)
	throw new Error(
		'Something happened in setting up the request that triggered an Error'
	)
}

const addConfiguration = (params) => ({ ...BEConfig, ...params })

const processResponse = ({ data }) => data

const request = (config) =>
	axios
		.request(addConfiguration(config))
		.then(processResponse)
		.catch(handleError)

export { request }
