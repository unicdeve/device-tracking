import isEmpty from './is-empty';

export const validateFirst4 = (data) => {
  const { Q1, Q2, Q3, Q4 } = data;
  const errors = {};

  if (Q1 === '') errors.Q1 = 'Q1 is required';
  if (Q2 === '') errors.Q2 = 'Q2 is required';
  if (Q3 === '') errors.Q3 = 'Q3 is required';
  if (Q4 === '') errors.Q4 = 'Q4 is required';

  return { errors, isValid: isEmpty(errors) };
};

export const validateSecond4 = (data) => {
  const { Q5, Q6, Q7, Q8 } = data;
  const errors = {};

  if (Q5 === '') errors.Q5 = 'Q5 is required';
  if (Q6 === '') errors.Q6 = 'Q6 is required';
  if (Q7 === '') errors.Q7 = 'Q7 is required';
  if (Q8 === '') errors.Q8 = 'Q8 is required';

  return { errors, isValid: isEmpty(errors) };
};
