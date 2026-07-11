/**
 * Centralized API configuration.
 * Change API_BASE_URL here instead of hardcoding it in every fetch call.
 */
export const API_BASE_URL = 'https://olympiad-backend-ko0e.onrender.com';

/**
 * Default fetch options for all API calls.
 * Includes credentials so cross-origin cookies (JWT) work properly.
 */
export const fetchOptions = (method = 'GET', body = null) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
};
