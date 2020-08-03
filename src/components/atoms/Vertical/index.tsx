import styled from 'styled-components';

interface VerticalProps {
	padding?: number;
}

export const Vertical = styled.div`
	padding: ${(props: VerticalProps) => props.padding}px;
	display: flex;
	flex-direction: column;
`;
