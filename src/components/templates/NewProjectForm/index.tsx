import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SubmitApplicantInfo } from '../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../store/NewProjectStore/types/index';
import ApplicantInfoForm from './ApplicantInfoForm';
import styled from 'styled-components';
import SizedBox from '../../atoms/SizedBox';

const NewProjectForm = () => {
	return (
		<NewProjectContainer>
			<NewProjectTitle>Предложить новый проект</NewProjectTitle>
			<SizedBox height={40}></SizedBox>
			<ApplicantInfoForm></ApplicantInfoForm>
		</NewProjectContainer>
	);
};

const NewProjectTitle = styled.h1`
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	text-align: center;
`;

const NewProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 60px 80px;
`;

export default withRouter(NewProjectForm);
