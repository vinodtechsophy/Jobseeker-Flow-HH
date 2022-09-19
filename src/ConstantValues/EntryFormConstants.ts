export const ReferencesArray = [
    "Our Website",
    "Pinterest",
    "Instagram",
    "Google Search",
    "Twitter",
    "LinkedIn",
    "Facebook",
    "Word of mouth",
    "Reference",
    "Others"
];

export const FormAttributes = {
    firstName: {
        maxLength: 25, 
        placeholder: 'First Name', 
        label: 'First Name*', 
        id: 'firstname',
        stateValue: 'firstName'
    },
    lastName: {
        maxLength: 25, 
        placeholder: 'Last Name', 
        label: 'Last Name*', 
        id: 'lastname',
        stateValue: 'lastName'
    },
    emailId: {
        maxLength: 45, 
        placeholder: 'xyz@gmail.com', 
        label: 'Email Address*', 
        id: 'email',
        stateValue: 'emailId'
    },
    countryCode: {
        maxLength: 5,  
        placeholder: '91', 
        label: '', 
        id: 'countrycode',
        stateValue: 'countryCode'
    },
    mobileNumber: {
        maxLength: 10, 
        placeholder: '8990911992', 
        label: 'Mobile Number*', 
        id: 'mobile',
        stateValue: 'mobileNumber'
    },
    alternateMobile: {
        maxLength: 12, 
        placeholder: '918990911992', 
        label: 'Alternate Mobile Number', 
        id: 'alternateNo',
        stateValue: 'alternateMobile'
    },
    reference: {
        inputLabel: 'How did you know about us?*', 
        label: 'How did you know about us?*', 
        id: 'references',
        stateValue: 'reference'
    },
    otherReference: {
        maxLength: 150,
        placeholder: '',
        label: 'Please Specify*',
        id: 'othersinput',
        stateValue: 'otherReference'
    }
}