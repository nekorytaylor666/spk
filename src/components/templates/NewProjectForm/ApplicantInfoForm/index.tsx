import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitApplicantInfo } from '../../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../../store/NewProjectStore/types/index';

const ApplicantInfoForm = () => {
	const [applicant, setApplicant] = useState<ApplicantInfo>();

	return <div>applicant form</div>;
};

export default ApplicantInfoForm;
