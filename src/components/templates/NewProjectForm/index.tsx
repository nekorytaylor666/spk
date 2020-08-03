import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { SubmitApplicantInfo } from '../../../store/NewProjectStore/actions/actions';
import { ApplicantInfo } from '../../../store/NewProjectStore/types/index';
import ApplicantInfoForm from './ApplicantInfoForm';
import styled from 'styled-components';
import SizedBox from '../../atoms/SizedBox';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProjectGeneralInfoForm from './ProjectGeneralInfoForm/index';
import ConfirmInfo from './ConfirmInfo';
import ParagraphWithIcon from '../../molecules/ParagraphWithIcon/index';
import { Vertical } from '../../atoms/Vertical/index';

interface AppMainProps extends RouteComponentProps<any> {}

const NewProjectForm: React.FC<AppMainProps> = (props) => {
	return (
		<NewProjectContainer>
			<NewProjectTitle>Предложить новый проект</NewProjectTitle>
			<SizedBox height={40}></SizedBox>

			<FormWithTipContainer>
				<Switch>
					<Route path="/app/newproject" exact>
						<ApplicantInfoForm></ApplicantInfoForm>
					</Route>
					<Route path="/app/newproject/2" exact>
						<ProjectGeneralInfoForm></ProjectGeneralInfoForm>
					</Route>
					<Route path="/app/newproject/3" exact>
						<ConfirmInfo></ConfirmInfo>
					</Route>
				</Switch>
				<Vertical padding={20}>
					<ParagraphWithIcon icon={['fas', 'info-circle']}>
						После того, как вы отправите заполненную анкету, со всеми необходимыми документами — вам останется дождаться подтверждения от
						менеджера.
					</ParagraphWithIcon>

					<SizedBox height={60}></SizedBox>
					<ParagraphWithIcon icon={['fas', 'lock']}>
						Вся информация, введенная вами сохраняется. Если каких-то документов сейчас не хватает, вы можете вставить их позже, вам не
						нужно будет заполнять поля заново.
					</ParagraphWithIcon>
				</Vertical>
			</FormWithTipContainer>
		</NewProjectContainer>
	);
};

const FormWithTipContainer = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	column-gap: 20px;
	justify-content: center;
`;

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
