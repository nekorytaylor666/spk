import React, { FunctionComponent, useContext } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { AuthContext } from './Auth';

interface PrivateRouteProps extends RouteProps {
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ component: Component, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	return <Route {...rest} render={props => (!!currentUser ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default PrivateRoute;
