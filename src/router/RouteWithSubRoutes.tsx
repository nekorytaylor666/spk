import React from 'react';
import { Route } from 'react-router-dom';
import { RouteScheme } from './config';

const RouteWithSubRoutes = (route: RouteScheme) => {
	console.log(route);
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};

export default RouteWithSubRoutes;
