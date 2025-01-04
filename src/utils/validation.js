export const checkValidateSignInData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

  if (!emailRegex) {
    return 'Invalid email address';
  }
  if (!passwordRegex) {
    return 'Password must contain at least 6 characters, including UPPER/lowercase and numbers';
  }
  return null;
}

export const checkValidateSignUpData = (name, email, password) => {
  const nameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/.test(name);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

  if (!nameRegex) {
    return 'Invalid name';
  }
  
  if (!emailRegex) {
    return 'Invalid email address';
  }
  if (!passwordRegex) {
    return 'Password must contain at least 6 characters, including UPPER/lowercase and numbers';
  }
  return null;
}