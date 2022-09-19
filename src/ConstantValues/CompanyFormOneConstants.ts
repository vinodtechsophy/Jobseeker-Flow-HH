export const FormAttributes = {
    firstName: {
        maxLength: 25, 
        placeholder: 'SPOC first name', 
        label: 'SPOC first name', 
        id: 'firstName'
    },
    lastName: {
        maxLength: 25, 
        placeholder: 'SPOC last name', 
        label: 'SPOC last name', 
        id: 'lastname'
    },
    officeEmail: {
        maxLength: 45, 
        placeholder: 'xyz@gmail.com', 
        label: 'Official Email Address', 
        id: 'officeEmail'
    },
    designation: {
        maxLength: 100,  
        placeholder: '91', 
        label: 'Enter Designation', 
        id: 'designation'
    },
    phoneNumber: {
        maxLength: 12, 
        placeholder: '8990911992', 
        label: 'Enter Mobile Number', 
        id: 'phoneNumber'
    },
    landlineNumber: {
        maxLength: 10,
        label: 'Enter Landline number', 
        id: 'landlineNumber'
    },
    companyName: {
        maxLength: 100, 
        label: 'Company Name', 
        id: 'companyName'
    },
    companyDescription: {
        maxLength: 200, 
        label: 'Description about the company', 
        id: 'companyDescription'
    },
    uploadCertificate: {
        label: 'Upload Certificate of Incorporation. Please specify?', 
        id: 'uploadCertificate'
    },
    registrationYear: {
        label: 'Company year of registration', 
        id: 'registrationYear'
    },
    linkedinUrl: {
        maxLength: 150,
        label: 'Company LinkedIn Page URL', 
        id: 'linkedinUrl'
    },
    companyWebsite: {
        label: 'Your website', 
        maxLength: 100,
        id: 'companyWebsite'
    },
    companyType: {
        label: 'Select Company Type',
        id: 'companyType'
    },
    alternativeEmail: {
        maxLength: 45,
        label: 'Enter alternate email address', 
        id: 'accNo'
    },
    addressOne: {
        maxLength: 100,
        label: 'Enter Line 1 Address', 
        id: 'addressLine1'
    },
    addressTwo: {
        maxLength: 100,
        label: 'Enter Line 2 Address', 
        id: 'addressLine2'
    },
    pincode: {
        maxLength: 6,
        label: 'Enter Pincode', 
        id: 'pin'
    },
    city: {
        maxLength: 50,
        label: 'City', 
        id: 'city'
    },
    state: {
        maxLength: 50,
        label: 'State', 
        id: 'state'
    },
    country: {
        maxLength: 50,
        label: 'Select Country', 
        id: 'country'
    }
}

export const COUNTRY_FILTER = 'country';
export const LETTERS_REGEX = /^[a-zA-Z '&().,\b]+$/
export const URL_REGEX = new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?");
export const PINCODE_REGEX = /^[1-9]{1}[0-9]{2}[0-9]{3}$/