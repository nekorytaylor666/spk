import React from 'react';
import { BrowserRouter as Router, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { RouteScheme } from '../../router/config';
import RouteWithSubRoutes from '../../router/RouteWithSubRoutes';
import Sidebar from '../templates/Sidebar/index';
import styled from 'styled-components';
import Header from '../templates/Header/index';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface AppMainProps extends RouteComponentProps<any> {
	routes: RouteScheme[];
}

const AppMain: React.FC<AppMainProps> = (props) => {
	console.log('routes:', props.routes);
	return (
		<AppContainerWithSidebar>
			<Sidebar />
			<AppWithSearchBarContainer>
				<Header />

				<Switch location={props.location}>
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

export default withRouter(AppMain);
