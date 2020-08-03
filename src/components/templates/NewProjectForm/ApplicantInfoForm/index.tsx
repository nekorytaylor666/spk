import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitApplicantInfo } from '../../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../../store/NewProjectStore/types/index';
import QmInput from '../../../atoms/QmInput/index';
import { Horizontal } from '../../../atoms/Horizontal/index';
import SizedBox from '../../../atoms/SizedBox/index';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { QmSubmit } from '../../../atoms/QmSubmit/index';
import { useHistory } from 'react-router-dom';

const ApplicantInfoForm = () => {
	const { register, handleSubmit } = useForm<ApplicantInfo>();
	let history = useHistory();
	let dispatch = useDispatch();
	const onSubmit = handleSubmit((data) => {
		console.log(data);
		history.push('/app/newproject/2');

		dispatch(SubmitApplicantInfo(data));
	});
	return (
		<FormPane>
			<FormContainer onSubmit={onSubmit}>
				<Horizontal style={{ width: '100%' }}>
					<QmInput name="bin" register={register} style={{ flex: 3 }} label="Бин" placeholder="Введите значение..." required></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput name="regDate" register={register} style={{ flex: 4 }} label="Дата" placeholder="Введите значение..." required></QmInput>
				</Horizontal>
				<QmInput name="orgName" register={register} label="Наименование организации" placeholder="Введите значение..." required></QmInput>
				<QmInput
					name="orgAddress"
					register={register}
					label="Юридический адрес компании"
					placeholder="Введите значение..."
					required></QmInput>
				<QmInput name="ownerFullName" register={register} label="ФИО руководителя" placeholder="Введите значение..." required></QmInput>
				<Horizontal>
					<QmInput
						name="role"
						register={register}
						style={{ flex: 5 }}
						label="Ваша роль в проекте"
						placeholder="Введите значение..."
						required></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput
						name="employerCount"
						register={register}
						style={{ flex: 3 }}
						label="Кол-во сотрудников"
						placeholder="Введите значение..."
						required></QmInput>
				</Horizontal>
				<Horizontal>
					<QmInput
						name="orgEmail"
						register={register}
						style={{ flex: 3 }}
						label="E-mail организации"
						placeholder="Введите значение..."
						required></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput
						name="orgPhoneNumber"
						register={register}
						style={{ flex: 4 }}
						label="Номер телефона организации"
						placeholder="Введите значение..."
						required></QmInput>
				</Horizontal>
				<QmInput
					name="orgSite"
					register={register}
					label="Веб-сайт организации (необязательно)"
					placeholder="Введите значение..."></QmInput>
				<Horizontal>
					<div style={{ flex: 1 }}></div>
					<QmSubmit style={{ flex: 1 }} value="Далее" />
				</Horizontal>
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

export default ApplicantInfoForm;
