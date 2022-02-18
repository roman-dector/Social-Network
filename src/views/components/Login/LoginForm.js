import styles from './LoginForm.module.css';

import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, watch } = useForm({ defaultVaues: {} });

  return (
    <div className={styles.loginFormContainer}>
      <form>
        <div className={styles.email}>
          <label>Email</label>
          <input />
        </div>

        <div className={styles.pass}>
          <label>Password</label>
          <input />
        </div>

        <div className={styles.submit}>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
