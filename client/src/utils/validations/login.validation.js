import isEmpty from './is-empty';

export const validateLoginData = (data) => {
  const { email, password } = data;
  const errors = {};

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') errors.email = 'Email is required';
  else if (email.length < 8 || !re.test(email)) {
    errors.email = 'Please, enter a valid email address';
  }

  if (password === '') errors.password = 'Password is required';

  return { errors, isValid: isEmpty(errors) };
};
