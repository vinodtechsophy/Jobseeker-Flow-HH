export const FormAttributes = {
    joiningDate: {
        maxLength: 25, 
        placeholder: 'Joining Date', 
        label: 'Joining Date', 
        id: 'joiningDate',
        stateValue: 'joiningDate',
        required: 'Joining Date is required'
    },
    joiningLocation: {
        maxLength: 25, 
        placeholder: 'Hyderabad', 
        label: 'City Name', 
        id: 'joiningLocation',
        stateValue: 'joiningLocation',
        required: 'Joining Location is required'
    },
    employerName: {
        maxLength: 45, 
        placeholder: 'Techsophy', 
        label: 'Name of the Company', 
        id: 'employerName',
        stateValue: 'employerName',
        required: 'Employer Name is required'
    },
    designation: {
        maxLength: 75, 
        placeholder: 'Software Engineer', 
        label: 'Job Title', 
        id: 'designation',
        stateValue: 'designation',
        required: 'Designation is required'
    }
}

export const SAVE_BTN_TEXT = 'Save';
export const DELETE_BTN_TEXT = 'Delete';
export const OFFER_ADD_TEXT = 'Add Another Offer';
export const PROPOSED_DATE = 'Proposed Joining Date';
export const JOIN_LOCATION = 'Joining Location';
export const EMPLOYER_NAME = 'Name of the Employer';
export const OFFERED_ROLE = 'Role / Designation offered';