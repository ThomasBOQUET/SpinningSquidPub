export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';

export const updateField = (fieldName, fieldValue) => ({
  type: UPDATE_FIELD,
  fieldName: fieldName,
  fieldValue: fieldValue,
});
export const successLogin = (name, tokenAPI) => ({
  type: SUCCESS_LOGIN,
  name: name,
  token: tokenAPI,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
