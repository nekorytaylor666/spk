import React from 'react';
import styled from 'styled-components';
import Logo from '../../img/logo.png';
import QmInput from '../atoms/QmInput';
import SizedBox from '../atoms/SizedBox';
import QmButton from '../atoms/QmButton/index';
import QmCheckbox from '../atoms/QmCheckbox/index';
import QmLink from '../atoms/QmLink/index';
import TopDecorationWaveSvg from '../../img/login-top-decoration-wave.svg';
import BottomDecorationWaveSvg from '../../img/login-bottom-decoration-wave.svg';

const LoginPage = () => {
	const [checked, setChecked] = React.useState(false);

	interface LoginFormState {
		login: string;
		password: string;
	}

	const [loginState, setLoginState] = React.useState<LoginFormState>({ login: '', password: '' });

	const handleChange = (input: keyof LoginFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setLoginState((formState) => {
			const state = { ...formState };
			state[input] = value;
			console.log(state);
			return state;
		});
	};
	return (
		<LoginContainer>
			<WaveDecoration style={{ flex: 1 }} src={TopDecorationWaveSvg} alt="decor-wave-top" />
			<div style={{ flex: 3 }}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<LogoImage src={Logo} alt="logo"></LogoImage>
				</div>

				<LoginPane>
					<LoginTitle>Войдите в свой аккаунт</LoginTitle>
					<SizedBox height={30}></SizedBox>
					<QmInput
						value={loginState.login}
						onInput={handleChange('login')}
						label="Логин/Бин"
						style={{ width: '100%' }}
						placeholder="Введите значение..."></QmInput>
					<SizedBox height={20}></SizedBox>
					<QmInput
						value={loginState.password}
						onInput={handleChange('password')}
						label="Пароль"
						type="password"
						style={{ width: '100%' }}
						placeholder="Введите значение..."></QmInput>
					<QmCheckbox
						label="Запомнить меня"
						checked={checked}
						onChange={() => {
							setChecked((value) => !value);
						}}></QmCheckbox>
					<SizedBox height={35}></SizedBox>

					<QmButton title="Войти" onClick={() => console.log({ ...loginState, checked })}></QmButton>
					<SizedBox height={20}></SizedBox>

					<LoginFooterActions>
						<QmLink style={{ textAlign: 'left', flex: 1 }} to="/signup">
							Регистрация аккаунта
						</QmLink>
						<QmLink style={{ textAlign: 'right', flex: 1 }} to="/">
							Забыли пароль?
						</QmLink>
					</LoginFooterActions>
				</LoginPane>
			</div>
			<WaveDecoration style={{ flex: 1 }} src={BottomDecorationWaveSvg} alt="decor-wave-bot" />
		</LoginContainer>
	);
};

const WaveDecoration = styled.img`
	width: 100%;
	object-fit: cover;
`;

const LoginFooterActions = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LogoImage = styled.img`
	max-width: 300px;
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
`;

const LoginTitle = styled.h1`
	font-family: Neo Sans Pro;
	font-style: normal;
	font-weight: normal;
	font-size: 1.2rem;
	line-height: 24px;
	text-align: center;
`;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
`;

const LoginPane = styled.div`
	min-height: 300px;
	max-width: 600px;
	background-color: white;
	box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	padding-right: 40px;
	padding-left: 40px;
	padding-top: 30px;
	padding-bottom: 30px;
`;

export default LoginPage;
