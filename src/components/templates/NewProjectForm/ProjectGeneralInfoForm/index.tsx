import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitApplicantInfo, SubmitProjectGeneralInfo } from '../../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo, ProjectGeneralInfo } from '../../../../store/NewProjectStore/types/index';
import QmInput from '../../../atoms/QmInput/index';
import { Horizontal } from '../../../atoms/Horizontal/index';
import SizedBox from '../../../atoms/SizedBox/index';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { QmSubmit } from '../../../atoms/QmSubmit/index';
import { useHistory } from 'react-router-dom';
import QmTextArea from '../../../atoms/QmTextArea/index';

const ProjectGeneralInfoForm = () => {
	const { register, handleSubmit } = useForm<ProjectGeneralInfo>();
	let history = useHistory();
	let dispatch = useDispatch();
	const onSubmit = handleSubmit((data) => {
		console.log('form data:', data);
		history.push('/app/newproject/3');
		dispatch(SubmitProjectGeneralInfo(data));
	});
	return (
		<FormPane>
			<FormContainer onSubmit={onSubmit}>
				<QmInput name="name" register={register} label="Название проекта" placeholder="Введите значение..." required></QmInput>
				<QmInput name="category" register={register} label="Категория проекта" placeholder="Введите значение..." required></QmInput>
				<QmTextArea name="description" label="Описание проекта" register={register} placeholder="Введите значение..." required></QmTextArea>
				<QmSubmit></QmSubmit>
			</FormContainer>
		</FormPane>
	);
};

const FormContainer = styled.form`
	display: grid;
	row-gap: 20px;
	padding: 40px;
`;

const FormPane = styled.div`
	box-shadow: 4px 4px 15px rgba(85, 85, 85, 0.2);
	border-radius: 20px;
`;

export default ProjectGeneralInfoForm;
