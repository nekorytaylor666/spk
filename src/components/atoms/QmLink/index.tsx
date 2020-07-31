import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ColorScheme } from '../../../lib/color';
const QmLink = styled(Link)`
	font-size: 1rem;
	line-height: 19px;
	text-align: center;
	text-decoration: none;

	/* Main Orange */

	color: ${ColorScheme.main.orange};
`;

export default QmLink;
