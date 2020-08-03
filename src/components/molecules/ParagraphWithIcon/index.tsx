import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Horizontal } from '../../atoms/Horizontal/index';
import SizedBox from '../../atoms/SizedBox/index';
import { ColorScheme } from '../../../lib/color/index';

interface ParagraphWithIconProps {
	icon: IconProp;
}

const ParagraphWithIcon: React.FC<ParagraphWithIconProps> = (props) => {
	const { icon, children } = props;
	return (
		<Horizontal>
			<FontAwesomeIcon icon={icon} color={ColorScheme.stroke.active}></FontAwesomeIcon>
			<SizedBox width={30}></SizedBox>
			<p>{children}</p>
		</Horizontal>
	);
};

export default ParagraphWithIcon;
