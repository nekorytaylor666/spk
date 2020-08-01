import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SubmitApplicantInfo } from '../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../store/NewProjectStore/types/index';
import ApplicantInfoForm from './ApplicantInfoForm';

const NewProjectForm = () => {
	return (
		<div>
			<ApplicantInfoForm></ApplicantInfoForm>
		</div>
	);
};

export default withRouter(NewProjectForm);
