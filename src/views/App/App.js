import styles from './App.module.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { authMe } from '../../redux/ducks/auth/operations';
import withStore from '../hocs/withStore';
import {
  Header,
  SideBar,
  Login,
  Profile,
  Dialogs,
  Users,
  Music,
  Settings,
  NotFound,
} from '../components/index.js';

const App = props => {
  useEffect(props.authMe);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <SideBar />

        <div className={styles.contentWrapper}>
          <Routes>
            <Route path='/' element={<Navigate replace to='/profile' />} />

            <Route path='/login' element={<Login />} />

            <Route path='/profile' element={<Profile />} />

            <Route path='/dialogs' element={<Dialogs />} />

            <Route path='/users' element={<Users />} />

            <Route path='/music' element={<Music />} />

            <Route path='/settings' element={<Settings />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default compose(withStore, connect(null, { authMe }))(App);
