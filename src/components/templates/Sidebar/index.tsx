import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';
import SidebarMenuItem, { SidebarMenuItemProps } from './SidebarMenuItem';

const SidebarConfig: SidebarMenuItemProps[] = [
	{
		title: 'Главная страница',
		icon: ['fas', 'home'],
	},
	{
		title: 'Проекты',
		icon: ['fas', 'file-alt'],
	},
	{
		title: 'Помощь',
		icon: ['fas', 'question-circle'],
	},
	{
		title: 'Уведомления',
		icon: ['fas', 'comment-alt'],
	},
];

const Sidebar = () => {
	return (
		<SidebarContainer>
			{SidebarConfig.map((item, index) => (
				<SidebarMenuItem key={index} {...item}></SidebarMenuItem>
			))}
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	background-color: ${ColorScheme.main.darkgrey};
`;

export default Sidebar;
