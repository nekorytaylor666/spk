import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import SizedBox from '../../../atoms/SizedBox/index';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ColorScheme } from '../../../../lib/color';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

export interface SidebarMenuItemProps {
	icon: IconProp;
	title: string;
	padding?: number;
	color?: string;
}

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
	const { icon, title, padding, color } = props;
	const itemColor = color ?? ColorScheme.text.grey;
	return (
		<ItemContainer padding={padding}>
			<FontAwesomeIcon icon={icon} style={{ fontSize: 20, textAlign: 'center', minWidth: 25 }} color={itemColor}></FontAwesomeIcon>
			<SizedBox width={10}></SizedBox>

			<ItemTitle color={itemColor}>{title}</ItemTitle>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: ${(props: { padding?: number }) => props.padding}px;
	text-decoration: none;
`;

const ItemTitle = styled.span`
	flex: 1;
	font-size: 16px;
	line-height: 24px;
	color: ${(props: { color?: string }) => props.color};
`;

export default SidebarMenuItem;
