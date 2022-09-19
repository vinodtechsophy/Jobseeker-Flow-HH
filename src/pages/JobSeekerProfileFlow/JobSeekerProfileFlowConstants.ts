export interface InlineInputModal {
    label: string;
    type: string;
    max?: string;
    maxLength?: string,
    placeholder?: string
}

export const YearMonthDetails = [
    {type: 'number', label: 'Years', placeholder: '5', max: 60},
    {type: 'number', label: 'Months', placeholder: '10', max: 12}
];

export const WorkStatusArray = ['Working', 'Not-Working', 'Fresh Graduate'];

export const TOTAL_EXP_TEXT = 'Total Work Experience';
export const RELEVANT_EXP_TEXT = 'Relevant Experience';
export const EXPERIENCE_TITLE = 'Experience Details';
export const FRESHER_TEXT = 'Fresh Graduate';
export const WORK_STATUS_TEXT = 'Work Status';
export const CTC_DETAIL_TEXT = 'Current CTC Details in INR';
export const FIXED_CTC_TEXT = 'Fixed CTC';
export const VARIABLE_CTC_TEXT = 'Variable CTC';
export const TOTAL_CTC_TEXT = 'Total CTC (Fixed + Variable)';
export const TCTC_SUB_TEXT = 'Per Annum';
export const TCTC_PLACEHOLDER = '5,60,0000';
export const EXPECTED_CTC_TEXT = 'Expected CTC Per Annum';
export const NOTICE_STATUS = 'Serving Notice Period OR Yet to Resign';
export const SEEKER_STATUS = 'Job Seeker Not Currently Working';
export const LWD_TEXT = 'Tentative last working day with current employer';
export const OFFICIAL_NOTICE_PERIOD_TEXT = 'Official Notice Period';
export const CHANGE_REASON_TEXT = 'Reason for job change';
export const NEGOTIABLE_TEXT = 'Notice period negotiable';
export const BUYOUT_OPTION = 'Buyout Option';
export const BUYOUT_QUESTION_TEXT = 'Buyout option Available';
export const NEGOTIABLE_YES_TEXT = 'To what extent notice period is negotiable';
export const OFFER_IN_HAND = 'Any Offer in hand?';
export const NO_OFFER_REASON = 'Mention the reason for resignation without offer';
export const WORD_LIMIT_TEXT = 'Maximum 120 words';
export const OTHER_LIMIT_TEXT = 'Maximum 20 Characters';
export const PROFILE_LOCATION_TEXT = 'Where did you find this Profile';
export const PROFILE_SOURCE_HOLDER = 'Enter source of the profile';
export const CURRENT_LOCATION_TEXT = 'Current Location';
export const PREFERRED_LOCATION_TEXT = 'Preferred Location';
export const ADDITIONAL_CERTIFICATES_TEXT = 'Any additional certifications';
export const CERTIFICATION_ADD_TEXT = 'Add Certification Details';
export const JOINING_DATE_TEXT = 'Earliest Joining Date';
export const LATE_JOINING_TEXT = 'Reason for Late Joining';
export const NEGOTIABLE_LABEL = 'Negotiable Period';
export const TOTAL_CTC_LABEL = 'Total CTC';

export const CTCDetails = [
    {type: 'number', label: 'Lakh', placeholder: '7', max: 99},
    {type: 'number', label: 'Thousand', placeholder: '80', max: 99}
];

export const NoticeOptions = [
    'Serving Notice Period',
    'Yet to Resign'
];

export const YesNoOptions = [
    'Yes',
    'No'
];

export const JobSeekerReviewArray = [
    {
        label: 'Duplication Check with Hiringhood',
        navigate: false
    },
    {
        label: 'Upload Resume',
        navigate: true
    },
    {
        label: 'Job Seeker Details',
        navigate: true
    },
    {
        label: 'Profile Sourced From',
        navigate: true
    },
    {
        label: 'Notice Period',
        navigate: true
    },
    {
        label: 'JD Specific Questions',
        navigate: true
    }
];

export const ProfileFetchLocations = [
    'Naukri',
    'Monster',
    'Linkedin',
    'Referral',
    'Others'
];