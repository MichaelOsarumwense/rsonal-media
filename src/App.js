import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import HomePage from './pages/home/home';
import RegisterPage from './pages/register/registerPage';
import ResetPasswordPage from './pages/resetPassword/resetPasswordPage';
import UpdateUserPage from './pages/updateUser/updateUserPage';

function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<LoginPage />
			</Route>
			<Route path="/home">
				<HomePage />
			</Route>
			<Route path="/register">
				<RegisterPage />
			</Route>
			<Route path="/reset-password">
				<ResetPasswordPage />
			</Route>
			<Route path="/update-user">
				<UpdateUserPage />
			</Route>
		</Switch>
	);
}

export default App;
