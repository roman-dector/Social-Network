import styles from './App.module.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NotFound from './components/NotFound/NotFound';

const App = () => {
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

export default App;
