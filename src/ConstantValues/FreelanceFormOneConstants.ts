export const EducationArray = [
    "B.A",
    "M.A",
    "MBA",
    "MCA",
    "M.Sc",
    "M.Tech",
    "Software Engineer",
    "Others"
];

export const FormAttributes = {
    firstName: {
        maxLength: 25, 
        label: 'Firstname', 
        id: 'firstName',
        stateValue: 'firstName'
    },
    lastName: {
        maxLength: 25, 
        label: 'Lastname', 
        id: 'lastname',
        stateValue: 'lastName'
    },
    description: {
        maxLength: 250, 
        label: 'Description about the Recruiter', 
        id: 'descriptionAboutTheOrganization',
        stateValue: 'description'
    },
    linkedinUrl: {
        maxLength: 150,
        label: 'LinkedIn Profile URL', 
        id: 'linkedinUrl',
        stateValue: 'linkedinUrl'
    },
    emailId: {
        label: 'Email Address', 
        maxLength: 50,
        id: 'email',
        stateValue: 'emailId'
    },
    alternateEmailId: {
        maxLength: 50,
        label: 'Alternate Email Address', 
        id: 'email2',
        stateValue: 'alternateEmailId'
    },
    education: {
        label: 'Education', 
        id: 'education',
        stateValue: 'education'
    },
    gender: {
        inputLabel: "Select Gender",
        label: 'Select Gender',
        stateValue: 'gender'
    },
    mobileNumber: {
        maxLength: 12, 
        placeholder: '919223838447', 
        label: 'Mobile Number*', 
        id: 'mobile',
        stateValue: 'mobileNumber'
    },
    alternateMobile: {
        maxLength: 12, 
        placeholder: '919000908478', 
        label: 'Alternate Mobile Number', 
        id: 'alternateNo',
        stateValue: 'alternateMobile'
    },
    addressOne: {
        maxLength: 100,
        label: 'Line 1 Address', 
        id: 'addr1',
        stateValue: 'addressOne'
    },
    addressTwo: {
        maxLength: 100,
        label: 'Line 2 Address', 
        id: 'addr2',
        stateValue: 'addressTwo'
    },
    pincode: {
        maxLength: 6,
        label: 'Pincode', 
        id: 'pin',
        stateValue: 'pincode'
    },
    city: {
        maxLength: 50,
        label: 'City', 
        id: 'city',
        stateValue: 'city'
    },
    state: {
        maxLength: 50,
        label: 'State', 
        id: 'state',
        stateValue: 'state'
    },
    country: {
        maxLength: 50,
        label: 'Select Country', 
        id: 'country',
        stateValue: 'country'
    },
}

export const CAPS_NUM_REGEX = /^[A-Z0-9\b]+$/