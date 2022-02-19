import styles from './LoginForm.module.css';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { validate } from '../../validationSchemas/validationFields';

const schema = yup
  .object({
    email: validate.emailRequired(),
    pass: validate.passRequired(8),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultVaues: {},
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={styles.loginFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.email}>
          <label>Email:</label>
          <input {...register('email')} />
          <FieldError errors={errors.email} touched={touchedFields.email} />
        </div>

        <div className={styles.pass}>
          <label>Password:</label>
          <input {...register('pass')} />
          <FieldError errors={errors.pass} touched={touchedFields.pass} />
        </div>

        <div className={styles.rememberMe}>
          <input {...register('rememberMe')} type={'checkbox'} />
          <label>remember me</label>
        </div>

        <div className={styles.submit}>
          <button type='submit'>Log In</button>
        </div>
      </form>
    </div>
  );
};

const FieldError = ({ errors, touched }) => {
  if (errors && touched) {
    let errorMessage = errors.message.split(' ').splice(1).join(' ');
    return <p className={styles.fieldError}>{errorMessage}</p>;
  } else return null;
};

export default LoginForm;
