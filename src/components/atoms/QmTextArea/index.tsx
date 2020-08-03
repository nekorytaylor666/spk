import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../../../lib/color';

interface QmTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	TextAreaStyle?: React.CSSProperties;
	register?: any;
	required?: boolean;
}

const QmTextArea: React.FC<QmTextAreaProps> = (props) => {
	const { register, required } = props;
	return (
		<div style={props.style}>
			{props.label && <TextAreaLabel htmlFor={props.label}>{props.label}</TextAreaLabel>}
			<TextArea rows={6} id={props.label} style={props.TextAreaStyle} {...props} ref={register && register({ required })}></TextArea>
		</div>
	);
};

const TextAreaLabel = styled.label`
	font-size: 1rem;
	line-height: 24px;
	color: ${ColorScheme.main.black};
`;

const TextArea = styled.textarea`
	background: ${ColorScheme.main.white};
	/* Color/Neutral/4 - Grey 25% */

	border: 1px solid ${ColorScheme.stroke.inactive};
	/* forms/low */

	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.02);
	border-radius: 6px;
	padding: 15px;
	width: 100%;
	resize: none;
	font-family: Neo Sans Pro;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	height: 100px;
`;

export default QmTextArea;
