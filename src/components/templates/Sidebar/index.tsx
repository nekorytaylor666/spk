import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';
import SidebarActionButton from './SidebarActionButton';
import SidebarMenuItem from './SidebarMenuItem';
import { Link } from 'react-router-dom';

interface SidebarConfigScheme {
	title: string;
	icon: IconProp;
	to: string;
}

const SidebarConfig: SidebarConfigScheme[] = [
	{
		title: 'Главная страница',
		icon: ['fas', 'home'],
		to: '/app/',
	},
	{
		title: 'Проекты',
		icon: ['fas', 'file-alt'],
		to: '/app/projects',
	},
	{
		title: 'Помощь',
		icon: ['fas', 'question-circle'],
		to: '/app/help',
	},
	{
		title: 'Уведомления',
		icon: ['fas', 'comment-alt'],
		to: '/app/notifications',
	},
];

const Sidebar = () => {
	return (
		<SidebarContainer>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<SidebarLink to="/app/newproject">
					<SidebarActionButton>
						<SidebarMenuItem color={'white'} title="Предложить проект" icon={['fas', 'folder-plus']}></SidebarMenuItem>
					</SidebarActionButton>
				</SidebarLink>
			</div>

			{SidebarConfig.map((item, index) => (
				<SidebarLink key={index} to={item.to}>
					<SidebarMenuItem padding={20} icon={item.icon} title={item.title}></SidebarMenuItem>
				</SidebarLink>
			))}
		</SidebarContainer>
	);
};

const SidebarLink = styled(Link)`
	text-decoration: none;
`;

const SidebarContainer = styled.div`
	background-color: ${ColorScheme.main.darkgrey};
	padding-top: 30px;
`;

export default Sidebar;
