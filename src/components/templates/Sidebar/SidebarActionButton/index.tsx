import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../../lib/color';
import { Link } from 'react-router-dom';

const SidebarActionButton = styled.button`
	background-color: ${ColorScheme.main.orange};
	border: none;
	padding: 15px 30px;
	filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.1));
	border-radius: 6px;
`;

export default SidebarActionButton;
