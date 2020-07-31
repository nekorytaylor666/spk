import React from 'react';
import { routes } from './config';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const RootRouter = () => {
	console.log(routes);
	return (
		<Router>
			{routes.map((route, index) => (
				<RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
			))}
		</Router>
	);
};

export default RootRouter;
