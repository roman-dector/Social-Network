import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  getIsUserAuthed,
  getIsAuthenticating,
  getCaptchaUrl,
} from '../../../redux/ducks/auth/selectors';
import { login } from '../../../redux/ducks/auth/operations';
import { setIsAuthenticating } from '../../../redux/ducks/auth/actions';

import LoginForm from './LoginForm';

const Login = props => {
  if (props.isUserAuthed) return <Navigate replace to='/profile' />;

  return (
    <LoginForm
      login={props.login}
      isAuthenticating={props.isAuthenticating}
      setIsAuthenticating={props.setIsAuthenticating}

      captchaUrl={props.captchaUrl}
    />
  );
};

const mapStateToPops = state => ({
  isUserAuthed: getIsUserAuthed(state),
  isAuthenticating: getIsAuthenticating(state),
  captchaUrl: getCaptchaUrl(state),
});

export default connect(mapStateToPops, { login, setIsAuthenticating })(Login);
