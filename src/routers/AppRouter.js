import { HashRouter, Route, Switch } from 'react-router-dom'
import Background from '../components/Background'
import Header from '../components/Header'
import { AppContextProvider } from '../contexts/AppContext'
import ROUTES from '../helpers/routes'
import Page from '../pages'
import Home from '../pages/home'
import SignIn from '../pages/signin'

const AppRouter = () => (
	<HashRouter>
		<AppContextProvider>
			<Page>
				<Header />
				<Switch>
					<Route path={ROUTES.home} component={Home} exact />
					<Route path={ROUTES.signin} component={SignIn} exact />
				</Switch>
				<Background />
			</Page>
		</AppContextProvider>
	</HashRouter>
)

export default AppRouter
