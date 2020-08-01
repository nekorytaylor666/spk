import { ProjectInfo } from '../types';
import { NewProjectActions } from '../actions/types';

const initialState: ProjectInfo = {
	applicant: {
		bin: '',
		regDate: new Date(Date.now()),
		orgName: '',
		orgAddress: '',
		orgEmail: '',
		orgPhoneNumber: '',
		orgSite: '',
		ownerFullName: '',
		role: '',
		employerCount: 0,
	},
	general: {
		name: '',
		category: '',
		description: '',
	},
	docs: {
		financialRevenue: '',
		insuranceMail: '',
	},
};

export const NewProjectReducer = (state = initialState, action: NewProjectActions) => {
	switch (action.type) {
		case 'APPLICANT_INFO_SUBMIT':
			state.applicant = { ...action.payload };
			break;
		case 'FILE_SUBMIT':
			state.docs = { ...action.payload };
			break;
		case 'PROJECT_GENERAL_INFO_SUBMIT':
			state.general = { ...action.payload };
			break;
		default:
			break;
	}

	return state;
};
