import isEmpty from './is-empty';

export const validateNewPasswordData = (data) => {
  const { old_password, new_password, confirm_password } = data;
  const errors = {};

  if (old_password === '') errors.old_password = 'Old password is required';
  if (new_password === '') errors.new_password = 'New password is required';

  if (confirm_password === '') errors.confirm_password = 'Confirm password is required';
  else if (confirm_password && confirm_password !== new_password)
    errors.confirm_password = 'Both passwords must match';

  return { errors, isValid: isEmpty(errors) };
};
