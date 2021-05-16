import isEmpty from './is-empty';

export const validateDeviceData = (data) => {
	const { os, manufacturer, device } = data;
	const errors = {};

	if (os === '') errors.os = 'OS is required';

	if (manufacturer === '') errors.manufacturer = 'Manufacturer is required';

	if (device === '') errors.device = 'Device name is required';

	return { errors, isValid: isEmpty(errors) };
};
