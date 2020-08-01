import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';

interface QmInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	inputStyle?: React.CSSProperties;
	register?: any;
	required?: boolean;
}

const QmInput: React.FC<QmInputProps> = (props) => {
	const { register, required } = props;
	return (
		<div style={props.style}>
			{props.label && <InputLabel htmlFor={props.label}>{props.label}</InputLabel>}
			<Input id={props.label} style={props.inputStyle} {...props} ref={register && register({ required })}></Input>
		</div>
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
	width: 100%;
`;

export default QmInput;
