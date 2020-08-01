export interface ApplicantInfo {
	bin: string;
	regDate: Date;
	orgName: string;
	orgAddress: string;
	orgEmail: string;
	orgPhoneNumber: string;
	orgSite: string;
	ownerFullName: string;
	role: string;
	employerCount: number;
}

export interface ProjectGeneralInfo {
	name: string;
	category: string;
	description: string;
}
//TODO: create appropriate doc types
export interface ProjectDocs {
	financialRevenue: string;
	insuranceMail: string;
}

export interface ProjectInfo {
	applicant: ApplicantInfo;
	general: ProjectGeneralInfo;
	docs: ProjectDocs;
}
