import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';

const ConfirmInfo = () => {
	const project = useSelector((state: RootState) => state.NewProjectReducer);
	console.log(project.general);
	return (
		<div>
			<h1>Full name:{project.applicant.ownerFullName}</h1>
			<h1>Project:{project.general.name}</h1>
		</div>
	);
};

export default ConfirmInfo;
