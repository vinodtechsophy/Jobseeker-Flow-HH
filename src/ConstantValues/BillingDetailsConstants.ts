export const BanksArray = [
    "AXIS",
    "CANARA",
    "HDFC",
    "ICICI",
    "KOTAK",
    "SBI",
    "UNION BANK",
    "YES",
    "Others"
];

export const FormAttributes = {
    gstNumber: {
        maxLength: 15, 
        label: 'Company GST No', 
        id: 'gstNumber',
        stateValue: 'gstNumber'
    },
    aadharNumber: {
        maxLength: 12, 
        label: 'Aadhar Card No', 
        id: 'aadhar',
        stateValue: 'aadharNumber'
    },
    panNumber: {
        maxLength: 10, 
        label: 'PAN No', 
        id: 'pan',
        stateValue: 'panNumber'
    },
    tanNumber: {
        maxLength: 10,
        label: 'Company TAN No', 
        id: 'tanNo',
        stateValue: 'tanNumber'
    },
    accountHolderName: {
        label: 'Account Holder Name', 
        maxLength: 75,
        id: 'accholder',
        stateValue: 'accountHolderName'
    },
    accountNumber: {
        maxLength: 12,
        label: 'Account Number', 
        id: 'accNo',
        stateValue: 'accountNumber'
    },
    branch: {
        label: 'Branch', 
        maxLength: 100,
        id: 'branch',
        stateValue: 'branch'
    },
    bankName: {
        inputLabel: "Bank Name",
        label: 'Select Bank',
        stateValue: 'bankName'
    },
    ifscCode: {
        maxLength: 11,
        label: 'IFSC Code', 
        id: 'accNo',
        stateValue: 'ifscCode'
    },
}

export const CAPS_NUM_REGEX = /^[A-Z0-9\b]+$/
export const SUBMIT_TEXT = 'Submit All Details'