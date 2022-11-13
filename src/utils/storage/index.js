// for local storage
export const setStorage = ({ key, data }) => {
  return window.localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  const data = window.localStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
};

export const removeStorage = (key) => {
  return window.localStorage.removeItem(key);
};

export const clearStorage = () => window.localStorage.clear();

// for session storage
export const setSessionStorage = (key, data) => {
  return window.sessionStorage.setItem(key, JSON.stringify(data));
};

export const getSessionStorage = (key) => {
  const data = window.sessionStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
};

export const removeSessionStorage = (key) => {
  return window.sessionStorage.removeItem(key);
};

export const clearSessionStorage = () => window.sessionStorage.clear();
