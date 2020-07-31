import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import SizedBox from '../../../atoms/SizedBox/index';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ColorScheme } from '../../../../lib/color';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SidebarMenuItemProps {
	icon: IconProp;
	title: string;
}

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
	const { icon, title } = props;
	return (
		<ItemContainer>
			<FontAwesomeIcon
				icon={icon}
				style={{ fontSize: 20, textAlign: 'center', minWidth: 25 }}
				color={ColorScheme.text.grey}></FontAwesomeIcon>
			<SizedBox width={10}></SizedBox>

			<ItemTitle>{title}</ItemTitle>
		</ItemContainer>
	);
};

const ItemContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 20px;
`;

const ItemTitle = styled.span`
	flex: 1;
	font-size: 16px;
	line-height: 24px;
	color: ${ColorScheme.text.grey};
`;

export default SidebarMenuItem;
