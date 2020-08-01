import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RouteScheme } from '../../router/config';
import RouteWithSubRoutes from '../../router/RouteWithSubRoutes';
import Sidebar from '../templates/Sidebar/index';
import styled from 'styled-components';
import Header from '../templates/Header/index';

interface AppMainProps {
	routes: RouteScheme[];
}

const AppMain = (props: AppMainProps) => {
	console.log('routes:', props.routes);
	return (
		<AppContainerWithSidebar>
			<Sidebar />
			<AppWithSearchBarContainer>
				<Header />
				<Switch>
					{props.routes.map((route, index) => (
						<RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
					))}
				</Switch>
			</AppWithSearchBarContainer>
		</AppContainerWithSidebar>
	);
};

const AppWithSearchBarContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const AppContainerWithSidebar = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	height: 100vh;
`;

export default AppMain;
