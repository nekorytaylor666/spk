import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';

interface QmInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const QmInput: React.FC<QmInputProps> = (props) => {
	return (
		<React.Fragment>
			{props.label && <InputLabel htmlFor={props.label}>{props.label}</InputLabel>}
			<Input id={props.label} {...props}></Input>
		</React.Fragment>
	);
};

const InputLabel = styled.label`
	font-size: 1rem;
	line-height: 24px;
	color: ${ColorScheme.main.black};
`;

const Input = styled.input`
	background: ${ColorScheme.main.white};
	/* Color/Neutral/4 - Grey 25% */

	border: 1px solid ${ColorScheme.stroke.inactive};
	/* forms/low */

	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.02);
	border-radius: 6px;
	padding: 15px;
	max-height: 50px;
`;

export default QmInput;
