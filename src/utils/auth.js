// // Save token to localStorage
// export const setToken = (token) => {
//     localStorage.setItem('authToken', token); 
//   };
//   export const getToken = () => {
//     return localStorage.getItem('authToken'); // Retrieves the token stored in localStorage
//   };
  
//   // Remove token from localStorage
//   export const removeToken = () => {
//     localStorage.removeItem('authToken'); // Removes the token from localStorage
//   };
  
//   // Check if the user is authenticated (token exists)
//   export const isAuthenticated = () => {
//     return !!getToken(); // Returns true if a token is found, false otherwise
//   };
  // utils/auth.js
export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!getToken();
};
