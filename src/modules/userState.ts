enum UserType {
  FREELANCE_RECRUITER = "Freelance Recruiter",
  RECRUITMENT_COMPANY = "Recruitment Company",
}

export interface user {
  userId: string;

  userData: {
    userName: string;
    mobileNumber: string;
    emailId: string;
    department: string;
    groups: string[];
    profileId: string;
    profileLogId: string;
    workStatus: string;
    roles?: string[];
    realm?: string;
    mobile2?: string;
    userType: UserType;
    companyId?: string;
    internalRecruiter?: string;
    jobSeekerId: string;
  };
}

export type UserEvent =
  | { type: "USER_ADD"; data: user }
  | { type: "USER_REMOVE" };

const initial: user = {
  userId: "",

  userData: {
    userName: "",
    workStatus: "",
    mobileNumber: "",
    emailId: "",
    department: "",
    groups: [],
    roles: [],
    realm: "techsophy-platform",
    userType: UserType.FREELANCE_RECRUITER,
    profileLogId: "",
    profileId: "",
    jobSeekerId: "",
  },
};

export default (state: user = initial, event: UserEvent): user => {
  switch (event.type) {
    case "USER_ADD":
      return {
        ...state,
        userData: event.data.userData,
        userId: event.data.userId,
      };

    default:
      return state;
  }
};
