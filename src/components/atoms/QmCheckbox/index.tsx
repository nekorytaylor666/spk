import React from 'react';
import styled from 'styled-components';
import SizedBox from '../SizedBox/index';

const CheckboxContainer = styled.div`
	display: flex;
	align-items: flex-end;
	height: auto;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${(props: QmCheckboxProps) => (props.checked ? 'salmon' : 'white')};
	/* Color/Neutral/4 - Grey 25% */

	border: ${(props: QmCheckboxProps) => (props.checked ? 'none' : '1px solid #ecebed;')};
	box-sizing: border-box;
	/* Dropshadow 1 */

	box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}

	${Icon} {
		visibility: ${(props: QmCheckboxProps) => (props.checked ? 'visible' : 'hidden')};
	}
`;

const StyledLabel = styled.span`
	line-height: 10px;
	font-size: 1rem;
`;

interface QmCheckboxProps {
	checked?: boolean;
	onChange?: () => void;
	label?: string;
}

const QmCheckbox: React.FC<QmCheckboxProps> = ({ checked, onChange, label }) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} onChange={onChange}></HiddenCheckbox>
		<StyledCheckbox checked={checked} onClick={onChange}>
			<Icon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12" />
			</Icon>
		</StyledCheckbox>
		<SizedBox width={5}></SizedBox>
		<StyledLabel>{label}</StyledLabel>
	</CheckboxContainer>
);

export default QmCheckbox;
