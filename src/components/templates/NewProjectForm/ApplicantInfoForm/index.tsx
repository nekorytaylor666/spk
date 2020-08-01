import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitApplicantInfo } from '../../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../../store/NewProjectStore/types/index';
import QmInput from '../../../atoms/QmInput/index';
import { Horizontal } from '../../../atoms/Horizontal/index';
import SizedBox from '../../../atoms/SizedBox/index';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const ApplicantInfoForm = () => {
	const { register, handleSubmit } = useForm();

	const [applicant, setApplicant] = useState<ApplicantInfo>();

	const onSubmit = (data: any) => console.log(data);

	return (
		<FormPane>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<Horizontal style={{ width: '100%' }}>
					<QmInput name="1" register={register} style={{ flex: 3 }} label="Бин" placeholder="Введите значение..."></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput name="2" register={register} style={{ flex: 4 }} label="Дата" placeholder="Введите значение..."></QmInput>
				</Horizontal>
				<QmInput name="3" register={register} label="Наименование организации" placeholder="Введите значение..." required></QmInput>
				<QmInput name="4" register={register} label="Юридический адрес компании" placeholder="Введите значение..."></QmInput>
				<QmInput name="5" register={register} label="ФИО руководителя" placeholder="Введите значение..."></QmInput>
				<Horizontal>
					<QmInput name="6" register={register} style={{ flex: 5 }} label="Ваша роль в проекте" placeholder="Введите значение..."></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput name="7" register={register} style={{ flex: 3 }} label="Кол-во сотрудников" placeholder="Введите значение..."></QmInput>
				</Horizontal>
				<Horizontal>
					<QmInput name="8" register={register} style={{ flex: 3 }} label="E-mail организации" placeholder="Введите значение..."></QmInput>
					<SizedBox width={20}></SizedBox>
					<QmInput
						name="9"
						register={register}
						style={{ flex: 4 }}
						label="Номер телефона организации"
						placeholder="Введите значение..."></QmInput>
				</Horizontal>
				<QmInput name="10" register={register} label="Веб-сайт организации (необязательно)" placeholder="Введите значение..."></QmInput>
				<input type="submit" />
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
	max-width: 700px;
	width: 60%;
`;

export default ApplicantInfoForm;
