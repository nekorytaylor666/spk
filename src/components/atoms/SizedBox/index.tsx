import styled from 'styled-components';

interface SizedBoxProps {
	width?: number;
	height?: number;
}

const SizedBox = styled.div`
	width: ${(props: SizedBoxProps) => props.width ?? 0}px;
	height: ${(props: SizedBoxProps) => props.height ?? 0}px;
`;

export default SizedBox;
