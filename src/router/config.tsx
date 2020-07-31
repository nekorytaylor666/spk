import React, { ReactPropTypes } from 'react';
import LoginPage from '../components/pages/Login';
import SignUpPage from '../components/pages/SignUp';
import AppMain from '../components/pages/AppMain';

export interface RouteScheme {
	path: string;
	component: (props?: any) => JSX.Element;
	title?: string;
	exact?: boolean;
	routes?: RouteScheme[];
}

export const routes: RouteScheme[] = [
	{
		path: '/',
		exact: true,
		title: 'Home',
		component: () => <h1>asdfs</h1>,
	},
	{
		path: '/login',
		title: 'Login',
		component: LoginPage,
	},
	{
		path: '/signin',
		title: 'Sign in',
		component: SignUpPage,
	},
	{
		path: '/app',
		component: AppMain,
		routes: [
			{
				path: '/app/projects',
				component: () => <h1>projects</h1>,
			},
			{
				path: '/app/newproject',
				component: () => <h1>new project</h1>,
			},
			{
				path: '/app/help',
				component: () => <h1>help</h1>,
			},
			{
				path: '/app/notifications',
				component: () => <h1>notifiactions</h1>,
			},
		],
	},
];
