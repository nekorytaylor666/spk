import { ApplicantInfo, ProjectGeneralInfo, ProjectDocs } from '../types/index';
export const APPLICANT_INFO_SUBMIT = 'APPLICANT_INFO_SUBMIT';
export const PROJECT_GENERAL_INFO_SUBMIT = 'PROJECT_GENERAL_INFO_SUBMIT';
export const FILE_SUBMIT = 'FILE_SUBMIT';

export interface ApplicantSubmitAction {
	type: typeof APPLICANT_INFO_SUBMIT;
	payload: ApplicantInfo;
}

export interface ProjectGeneralSubmitAction {
	type: typeof PROJECT_GENERAL_INFO_SUBMIT;
	payload: ProjectGeneralInfo;
}
export interface ProjectDocsSubmitAction {
	type: typeof FILE_SUBMIT;
	payload: ProjectDocs;
}

export type NewProjectActions = ApplicantSubmitAction | ProjectGeneralSubmitAction | ProjectDocsSubmitAction;
