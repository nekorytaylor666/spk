import { ApplicantInfo, ProjectGeneralInfo, ProjectDocs } from '../types/index';
import { ApplicantSubmitAction, ProjectGeneralSubmitAction, ProjectDocsSubmitAction } from './types';

export function SubmitApplicantInfo(applicant: ApplicantInfo): ApplicantSubmitAction {
	return {
		type: 'APPLICANT_INFO_SUBMIT',
		payload: applicant,
	};
}

export function SubmitProjectGeneralInfo(projectGeneralInfo: ProjectGeneralInfo): ProjectGeneralSubmitAction {
	return {
		type: 'PROJECT_GENERAL_INFO_SUBMIT',
		payload: projectGeneralInfo,
	};
}

export function SubmitProjectDocs(docs: ProjectDocs): ProjectDocsSubmitAction {
	return {
		type: 'FILE_SUBMIT',
		payload: docs,
	};
}
