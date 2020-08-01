import React from 'react';
import styled from 'styled-components';
import Logo from '../../../img/logo.png';
import QmInput from '../../atoms/QmInput/index';
import SizedBox from '../../atoms/SizedBox/index';
const Header = () => {
	return (
		<HeaderContainer>
			<LogoImage src={Logo}></LogoImage>
			<SizedBox width={20}></SizedBox>
			<QmInput placeholder="Поиск по проекту, менеджеру, уведомлению" style={{ width: 600 }} />
		</HeaderContainer>
	);
};

const LogoImage = styled.img`
	height: 75px;
`;

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	justify-content: center;
`;

export default Header;
