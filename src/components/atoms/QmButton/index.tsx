import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';

interface QmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	onClick?: () => void;
}

const QmButton: React.FC<QmButtonProps> = ({ title, onClick }) => {
	return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.button`
	border: none;
	color: white;
	background: ${ColorScheme.main.orange};
	border-radius: 6px;
	height: 50px;
	width: 100%;
	font-size: 1.2rem;
	line-height: 1.5rem;
	/* or 120% */

	text-align: center;
	filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.1));
`;

export default QmButton;
