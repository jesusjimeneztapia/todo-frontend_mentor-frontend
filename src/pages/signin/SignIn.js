import GlobalStyles from '../../styles/global.module.scss'
import Form from './components/Form'
import Title from './components/Title'

const SignIn = () => (
	<section
		className={`${GlobalStyles.container} ${GlobalStyles['margin-t64']}`}
	>
		<Title
			className={`${GlobalStyles['border-radius-1']} ${GlobalStyles['padding-a16']}`}
		/>
		<Form
			className={`${GlobalStyles['border-radius-1']} ${GlobalStyles['padding-a16']} ${GlobalStyles['margin-t32']}`}
		/>
	</section>
)

export default SignIn
