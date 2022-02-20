import styles from './App.module.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

import { initializeApp } from '../../redux/ducks/app/operations';
import { appSelectors } from '../../redux/ducks/app';
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
  Preloader,
} from '../components/index.js';

const App = props => {
  useEffect(() => props.initializeApp());

  if (!props.isAppInitialized) return <Preloader />;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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

const mapStateToProps = state => ({
  isAppInitialized: appSelectors.getIsAppInitialized(state),
});

export default compose(
  withStore,
  connect(mapStateToProps, { initializeApp })
)(App);
