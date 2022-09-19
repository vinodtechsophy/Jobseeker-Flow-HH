import React, { ReactElement, FC } from "react";
import Button from '@mui/material/Button';
import '../../App.css';
import KeycloakService from "../../services/KeycloakService";
import './SignupSuccess.css'

const SignupSuccess: FC<any> = (props): ReactElement => {

  return (
  <>    
    <div className="logo-container">
        <img src="assets/images/successful_signup.png" alt="logo"/>
    </div>
    <div className="success-main-text-container">
        <p className="success-main-text">
            {
                props?.complete ? 'Congratulations, Your profile has been completed': 
                'Your account has been successfully created'
            }
        </p>
    </div>
    <div className="success-btn-container">
        <Button onClick={() => {window.location.href = props?.complete ? '/login' : '/'}} fullWidth variant="contained"
        className='validate-button'>
            {KeycloakService.isLoggedIn() ? props?.complete ? 'Go to Dashboard' : 'Enter Profile Details' :
            'Click Here to Login with credentials sent to your email'}
        </Button>
    </div>
  </>
  );
};

export default SignupSuccess;