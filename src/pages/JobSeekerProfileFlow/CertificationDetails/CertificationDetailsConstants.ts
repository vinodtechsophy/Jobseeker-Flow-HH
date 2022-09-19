export const FormAttributes = {
    name: {
        maxLength: 25, 
        placeholder: 'Name of the certificate', 
        label: 'Name', 
        id: 'name',
        stateValue: 'name',
        required: 'Certificate name is required'
    },
    issuingOrganization: {
        maxLength: 25, 
        placeholder: 'Coursers, Linkedin Learning', 
        label: 'Issuing Organization', 
        id: 'issuingOrganization',
        stateValue: 'issuingOrganization',
        required: 'Issuing Organization name is required'
    },
    credentialId: {
        maxLength: 45, 
        placeholder: '20WASEQNDH32J', 
        label: 'Name of the Company', 
        id: 'credentialId',
        stateValue: 'credentialId',
        required: 'Credential ID is required'
    },
    credentialURL: {
        maxLength: 100, 
        placeholder: 'https://www.coursera.org/learn/found', 
        label: 'Job Title', 
        id: 'credentialURL',
        stateValue: 'credentialURL',
        required: 'Credential URL is required'
    },
    issueDate: {
        maxLength: 25, 
        placeholder: 'Issue Date', 
        label: 'Issue Date', 
        id: 'issueDate',
        stateValue: 'issueDate',
        required: 'Issue Date is required'
    },
    expirationDate: {
        maxLength: 25, 
        placeholder: 'Expiration Date', 
        label: 'Expiration Date', 
        id: 'expirationDate',
        stateValue: 'expirationDate',
        required: 'Expiration Date is required'
    }
}

export const CERTIFICATION_ADD_TEXT = 'Add Certification Details';
export const CERTIFICATION_NAME_TEXT = 'Name';
export const CERTIFICATION_ORIGIN_TEXT = 'Issuing Organization';
export const CREDENTIAL_ID_TEXT = 'Credential ID';
export const CREDENTIAL_URL_TEXT = 'Credential URL';
export const CERTIFICATION_ISSUE_DATE = 'Issue Date';
export const CERTIFICATION_EXPIRY_DATE = 'Expiration Date';
export const CREDENTIAL_EXPIRY_TEXT = "This credential doesn't expire";

export const SAVE_BTN_TEXT = 'Save';
export const DELETE_BTN_TEXT = 'Delete';
export const OFFER_ADD_TEXT = 'Add Another Offer';
export const PROPOSED_DATE = 'Proposed Joining Date';
export const JOIN_LOCATION = 'Joining Location';
export const EMPLOYER_NAME = 'Name of the Employer';
export const OFFERED_ROLE = 'Role / Designation offered';