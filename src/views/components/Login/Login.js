import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getIsUserAuthed } from '../../../redux/ducks/auth/selectors';

import LoginForm from './LoginForm';

const Login = props => {
  if (props.isUserAuthed) return <Navigate replace to='/profile' />;

  return <LoginForm />;
};

const mapStateToPops = state => ({
  isUserAuthed: getIsUserAuthed(state),
});

export default connect(mapStateToPops)(Login);
