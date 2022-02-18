import * as yup from 'yup';

const validate = {
  emailRequired: () => yup.string().email().required(),

  passRequired: length => yup.string().min(length).required(),
};

export { validate };
